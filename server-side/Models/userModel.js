const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    username: {
        required: true,
        type: 'string',
    },
    role: {
        type: 'string',
        default: 'customer',
    },
    email: {
        required: true,
        type: 'string',
    },
    phone: {
        default: '',
        type: 'string',
    },
    password: {
        default: '',
        required: true,
        type: 'string',
    },
    
})

const userModel = mongoose.model('users', userSchema);
module.exports = userModel;