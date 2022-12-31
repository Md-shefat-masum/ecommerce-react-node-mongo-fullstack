const mongoose = require('mongoose')

const productSchema = mongoose.Schema({
    title: {
        required: true,
        type: 'string',
    },
    category: {
        // type: 'string',
        required: true,
        type: mongoose.Types.ObjectId,
        ref: 'category'
    },
    price: {
        required: true,
        type: 'number',
        default: 0,
    },
    discount: {
        type: 'number',
        default: 0,
    },
    discount_price: {
        type: 'number',
        default: 0,
    },
    discount_date: {
        type: 'date',
    },
    thumb_image: {
        required: true,
        type: 'string',
    },
    related_image: {
        type: 'array',
    },
    description: {
        required: true,
        type: 'string',
    },
    status: {
        type: 'number',
        default: 1,
    },
    creator: {
        // type: 'string',
        type: mongoose.Types.ObjectId,
        ref: 'user',
    },

}, {
    timestamps: true
})

const productModel = mongoose.model('product', productSchema);
module.exports = productModel;