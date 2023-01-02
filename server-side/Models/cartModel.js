const mongoose = require('mongoose')

const cartSchema = mongoose.Schema({
    product_id: {
        type: mongoose.Types.ObjectId,
        required: false,
    },
    user_id: {
        type: mongoose.Types.ObjectId,
        required: false,
    },
    discount: {
        required: false,
        type: 'number',
    },
    discount_price: {
        required: false,
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

const cartModel = mongoose.model('cart', cartSchema);
module.exports = cartModel;