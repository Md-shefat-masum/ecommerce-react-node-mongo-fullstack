const {
    validationResult
} = require('express-validator');
const productModel = require('../Models/productModel');
const {
    uploadFile
} = require('./helper-controller');


const allProduct = async (req, res, next) => {
    let products = await productModel.find()
        .populate('category')
        .populate('creator');
    return res.status(200).json(products);
}

async function createProduct(req, res, next) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(422).json({
            errors: errors.array()
        });
    }

    const {
        title,
        category,
        price,
        discount,
        discount_price,
        discount_date,
        description,
    } = req.body;

    let image_list = [];
    let thumb_image = '';
    if (req.files) {
        thumb_image = uploadFile(req.files.thumb_image, 'uploads/products');
        const images = req.files.related_image;
        images.forEach(image => {
            image_list.push(uploadFile(image, 'uploads/products'));
        });
    }

    let newProduct = await new productModel({
        title,
        category,
        price,
        discount,
        discount_price,
        discount_date,
        description,
        thumb_image: thumb_image,
        related_image: image_list,
        creator: req.userData._id,
    }).save();

    res.status(201).json(newProduct)
}

const getProduct = async (req, res, next) => {
    let {
        id
    } = req.params;
    let category = await productModel.findOne({
            _id: id
        })
        .populate('category')
        .populate('creator');
    return res.status(200).json(category);
}

async function updateProduct(req, res, next) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(422).json({
            errors: errors.array()
        });
    }

    const {
        _id,
        title,
        category,
        price,
        discount,
        discount_price,
        discount_date,
        description,
    } = req.body;

    let product = await productModel.findById(_id);

    let image_list = [];
    let thumb_image = product.thumb_image;
    if (req.files) {
        if(req.files?.thumb_image?.size){
            thumb_image = uploadFile(req.files.thumb_image, 'uploads/products');
        }

        const images = req.files?.related_image;
        if(images.length){
            images.forEach(image => {
                image_list.push(uploadFile(image, 'uploads/products'));
            });
        }else{
            image_list = [...product.related_image];
        }
    }

    let updatedProduct = await productModel.updateOne({
        _id
    }, {
        title,
        category,
        price,
        discount,
        discount_price,
        discount_date,
        description,
        thumb_image: thumb_image,
        related_image: image_list,
        creator: req.userData._id,
    });

    res.status(201).json(updatedProduct)
}

const deleteProduct = async (req, res, next) => {
    const {
        id
    } = req.body;

    let category = await productModel.deleteOne({
        _id: id
    });

    if (category.deletedCount) {
        return res.status(200).json('data deleted');
    } else {
        return res.status(400).json({
            msg: 'no data deleted',
            category
        });
    }
}

exports.createProduct = createProduct;
exports.allProduct = allProduct;
exports.getProduct = getProduct;
exports.updateProduct = updateProduct;
exports.deleteProduct = deleteProduct;