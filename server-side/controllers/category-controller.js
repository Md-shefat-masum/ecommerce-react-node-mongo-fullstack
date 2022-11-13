const {
    validationResult
} = require('express-validator');
const categoryModel = require('../Models/categoryModel');

const allCategory = async (req, res, next) => {
    let categories = await categoryModel.find()
        .populate('parent')
        .populate('creator');;
    return res.status(200).json(categories);
}

async function createCategory(req, res, next) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(422).json({
            errors: errors.array()
        });

        // throw new HttpError('my eorro.', 404);     
    }

    const {
        title,
        parent,
    } = req.body;

    let newCategory = await new categoryModel({
        title,
        parent,
        creator: req.userData._id,
    }).save();

    res.status(201).json(newCategory)
}

const getCategory = async (req, res, next) => {
    let {
        id
    } = req.params;
    let category = await categoryModel.findOne({
            _id: id
        })
        .populate('parent')
        .populate('creator');
    return res.status(200).json(category);
}

const updateCategory = async (req, res, next) => {
    const {
        id,
        title,
        parent,
    } = req.body;
    let category = await categoryModel.updateOne({
        _id: id
    }, {
        title,
        parent,
    });
    return res.status(200).json(category);
}

const deleteCategory = async (req, res, next) => {
    const {
        id
    } = req.body;

    let category = await categoryModel.deleteOne({
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

exports.createCategory = createCategory;
exports.allCategory = allCategory;
exports.getCategory = getCategory;
exports.updateCategory = updateCategory;
exports.deleteCategory = deleteCategory;