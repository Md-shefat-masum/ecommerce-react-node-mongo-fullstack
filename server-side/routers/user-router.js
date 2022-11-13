const express = require('express')
const router = express.Router();
const userController = require('../controllers/user-controller')
const {
    body,
    check
} = require('express-validator');
const userModel = require('../Models/userModel')
const authMiddleWare = require('../middleware/authMiddleWare')

router.get('/all', userController.allUser)

router.post('/create',
    [
        // username must be an email
        body('email')
        .normalizeEmail()
        .not().isEmpty().withMessage('email is empty')
        .isEmail().withMessage('not of email type'),
        // password must be at least 5 chars long
        body('username').notEmpty().isLength({
            min: 5
        })
    ],
    userController.createUser
);

router.post('/login',
    [
        body('email')
        .normalizeEmail()
        .notEmpty().withMessage('email is empty')
        .isEmail().withMessage('not of email type')
        .custom(async (value) => {
            let user = await userModel.findOne({
                email: value
            })
            if (!user) {
                return Promise.reject('there is no user found');
            }
        }).withMessage('there is no user found'),

        body('password')
        .not().isEmpty().withMessage('password is required')
        .isLength({
            min: 4,
        }).withMessage('min length 4'),
    ],
    userController.loginUser
);

router.post('/register',
    [
        // username must be an email
        body('email')
        .normalizeEmail()
        .notEmpty().withMessage('email is empty')
        .isEmail().withMessage('not of email type')
        .custom(async (value) => {
            let user = await userModel.findOne({
                email: value
            })
            if (user) {
                return Promise.reject('E-mail already in use');
            }
        }).withMessage('E-mail already in use'),

        check('username')
        .not().isEmpty().withMessage('username is required'),

        body('password')
        .not().isEmpty().withMessage('password is required')
        .isLength({
            min: 4,
        }).withMessage('min length 4'),

        body('repassword').custom((value, {
            req
        }) => {
            if (value !== req.body.password) {
                throw new Error('Password does not matched.');
            }

            return true;
        })
    ],
    userController.registerUser
);

router.use(authMiddleWare);

router.get('/check-user', userController.checkUser)

router.get('/get/:id', userController.getUser)

router.post('/update/:id', (req, res) => {
    res.json('user update')
})
router.get('/delete/:id', userController.deleteUser)

module.exports = router;