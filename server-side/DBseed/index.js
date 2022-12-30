const mongoose = require('mongoose');
const userSeeder = require('./userSeeder');
const categorySeeder = require('./categorySeeder');
const productSeeder = require('./productSeeder');
const bannerSeeder = require('./bannerSeeder');

mongoose
    .connect('mongodb+srv://baby_shop_db:a9FRjPzhmB9w0bW4@cluster0.c4sik5l.mongodb.net/?retryWrites=true&w=majority')
    .then(async () => {
        await userSeeder();
        console.log('user seeder completed');

        await categorySeeder();
        console.log('category seeder completed');

        await productSeeder();
        console.log('product seeder completed');

        await bannerSeeder();
        console.log('banner seeder completed');
    })
    .catch(err=>{
        console.log(err);
    })