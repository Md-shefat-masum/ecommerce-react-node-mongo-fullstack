const userModel = require('../Models/userModel');
const bcrypt = require('bcryptjs');

const userSeeder = async () => {
    let users = [{
            username: 'admin',
            role: 'admin',
            email: 'admin@gmail.com',
            phone: '01123456734',
            password: await bcrypt.hash('12345678', 10),
        },
        {
            username: 'customer',
            role: 'customer',
            email: 'customer@gmail.com',
            phone: '01123456734',
            password: await bcrypt.hash('12345678', 10),
        },
    ];

    await userModel.deleteMany({});
    let result = await userModel.insertMany(users);
    // console.log(result);
}

module.exports = userSeeder;