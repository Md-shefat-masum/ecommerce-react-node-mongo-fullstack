const {
    validationResult
} = require('express-validator');
const cartModel = require('../Models/cartModel');

const allCart = async (req, res, next) => {
    let carts = await cartModel.find()
        .populate('user_id')
        .populate('product_id');;
    return res.status(200).json(carts);
}

async function createCart(req, res, next) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(422).json({
            errors: errors.array()
        });

        // throw new HttpError('my eorro.', 404);     
    }

    const {carts} = req.body;
    console.log(carts);

    await cartModel.deleteMany({user_id: req.userData._id})
    let newCarts = await cartModel.insertMany(carts);

    // let newCart = await new CartModel({
    //     title,
    //     parent,
    //     creator: req.userData._id,
    // }).save();

    res.status(201).json(newCarts)
}

const getCart = async (req, res, next) => {
    let {
        id
    } = req.params;
    let Cart = await cartModel.findOne({
            _id: id
        })
        .populate('parent')
        .populate('creator');
    return res.status(200).json(Cart);
}

const updateCart = async (req, res, next) => {
    const {
        id,
        title,
        parent,
    } = req.body;
    let Cart = await cartModel.updateOne({
        _id: id
    }, {
        title,
        parent,
    });
    return res.status(200).json(Cart);
}

const deleteCart = async (req, res, next) => {
    const {
        id
    } = req.body;

    let Cart = await cartModel.deleteOne({
        _id: id
    });

    if (Cart.deletedCount) {
        return res.status(200).json('data deleted');
    } else {
        return res.status(400).json({
            msg: 'no data deleted',
            Cart
        });
    }
}

exports.createCart = createCart;
exports.allCart = allCart;
exports.getCart = getCart;
exports.updateCart = updateCart;
exports.deleteCart = deleteCart;