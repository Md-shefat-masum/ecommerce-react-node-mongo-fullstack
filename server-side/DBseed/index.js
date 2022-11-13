const mongoose = require('mongoose');
const userSeeder = require('./userSeeder');
const categorySeeder = require('./categorySeeder');
const productSeeder = require('./productSeeder');

mongoose
    .connect('mongodb+srv://baby-shop-ecom:YT6raiJHVHnxjXUR@cluster0.jztnajv.mongodb.net/baby_shop_db?retryWrites=true&w=majority')
    .then(async () => {
        await userSeeder();
        console.log('user seeder completed');

        await categorySeeder();
        console.log('category seeder completed');

        await productSeeder();
        console.log('product seeder completed');
    })
    .catch(err=>{
        console.log(err);
    })