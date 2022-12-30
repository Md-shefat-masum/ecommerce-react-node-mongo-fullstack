const express = require('express')
const mongoose = require('mongoose')
const app = express()
const port = 5001
const bodyParser = require('body-parser')
const cors = require('cors')
const formData = require('express-form-data');

const userRouter = require('./routers/user-router');
const productRouter = require('./routers/product-router');
const categoryRouter = require('./routers/category-router');

app.set('json spaces', 4);
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({
    limit: '50mb', 
    extended: false
}))
app.use(formData.parse());
app.use(cors());
app.use('/uploads', express.static('uploads'))

app.use('/api/user', userRouter);
app.use('/api/category', categoryRouter);
app.use('/api/product', productRouter);


let terminal_loader_trigger = require('./hooks/teminal_loader');
process.stdout.write("\n 🧊 connecting mongoDB \n");
terminal_loader_trigger = terminal_loader_trigger();

mongoose
    .connect('mongodb+srv://baby_shop_db:a9FRjPzhmB9w0bW4@cluster0.c4sik5l.mongodb.net/?retryWrites=true&w=majority')
    .then(() => {
        terminal_loader_trigger.stop_loader();
        console.log('\033[93m', `\n ✔️  mongoose connected \n`);
        app.listen(port, () => {
            process.stdout.write(` 🧣 server listening on port`)
            console.log("\033[94m ", `http://localhost:${port} \n`);
        })
    })
    .catch((err) => {
        terminal_loader_trigger.stop_loader();
        console.log('\x1b[31m', `\n ❌ mongoose connection rejected \n`);
        console.log(" " + err.codeName + "\n");
    })


// console.log();
// for (let index = 0; index < 50; index++) {
//     process.stdout.write('.');
// }
// process.stdout.cursorTo(49);
// process.stdout.write('\t0%')

// process.stdout.cursorTo(0);
// let i = 0;
// let loader_interval = setInterval(() => {
//     process.stdout.cursorTo(49);
//     process.stdout.write(`\t${i*2}%`);

//     if (i < 20) {
//         process.stdout.write('\x1b[31m');
//     }
//     else if (i >= 25) {
//         process.stdout.write('\x1b[32m');
//     }

//     process.stdout.cursorTo(i);
//     process.stdout.write('#');

//     if (i++ == 50) {
//         clearInterval(loader_interval);
//         process.stdout.clearLine();
//         process.stdout.cursorTo(1);
//         process.stdout.write('✔️  DB connected \n');
//     }
// }, 50);