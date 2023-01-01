const mongoose = require('mongoose')

const bannerSchema = mongoose.Schema({
    product_id: {
        type: mongoose.Types.ObjectId,
        required: false,
    },
    user_id: {
        type: mongoose.Types.ObjectId,
        required: false,
    },
    discount_price: {
        required: true,
        type: 'number',
    },
    price: {
        required: true,
        type: 'number',
    },
    qty: {
        required: true,
        type: 'number',
    },
    thumb_image: {
        required: true,
        type: 'string',
    }, 
})

const bannerModel = mongoose.model('banner', bannerSchema);
module.exports = bannerModel;