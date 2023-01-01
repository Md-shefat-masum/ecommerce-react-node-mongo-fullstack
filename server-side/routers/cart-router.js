const express = require('express');
const authMiddleWare = require('../middleware/authMiddleWare');
const router = express.Router();
const cartController = require('../controllers/cart-controller')

router.use(authMiddleWare);
router.get('/all', cartController.allCart)
router.post('/create', cartController.createCart)
router.get('/get/:id', cartController.getCart)
router.post('/update', cartController.updateCart)
router.post('/delete', cartController.deleteCart)

module.exports = router