const mongoose = require('mongoose')

const bannerSchema = mongoose.Schema({
    title: {
        required: true,
        type: 'string',
    },
    image: {
        type: 'string',
        required: true,
    },
    button_text: {
        required: true,
        type: 'string',
    },
    button_url: {
        required: true,
        type: 'string',
    } ,
    status: {
        type: 'number',
        default: 1,
    },
})

const bannerModel = mongoose.model('banner', bannerSchema);
module.exports = bannerModel;