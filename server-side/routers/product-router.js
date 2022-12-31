const express = require('express');
const authMiddleWare = require('../middleware/authMiddleWare');
const router = express.Router();
const productController = require('../controllers/product-controller')
const {
    check
} = require('express-validator');

router.get('/list', productController.allProduct)

router.use(authMiddleWare);
router.get('/all', productController.allProduct)

router.post('/create',
    [
        check('title')
        .not().isEmpty().withMessage('title is required'),

        check('price')
        .not().isEmpty().withMessage('price is required'),

        check('category')
        .not().isEmpty().withMessage('category is required'),

        check('thumb_image')
        .custom((value, {
            req,
            res,
            next
        }) => {
            if (req.files.thumb_image.size == 0) {
                return Promise.reject('thumb image field is required');
            } else {
                return true;
            }
        }),

        check('description')
        .not().isEmpty().withMessage('description is required'),

    ], productController.createProduct)

router.get('/get/:id', productController.getProduct)
router.post('/update',
    [
        check('title')
        .not().isEmpty().withMessage('title is required'),

        check('price')
        .not().isEmpty().withMessage('price is required'),

        check('category')
        .not().isEmpty().withMessage('category is required'),

        check('description')
        .not().isEmpty().withMessage('description is required'),

    ], productController.updateProduct)
    
router.post('/delete', productController.deleteProduct)

module.exports = router