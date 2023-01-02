const {
    validationResult
} = require('express-validator');
const userModel = require('../Models/userModel');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

let users = [{
        email: 'user1@ex.com',
        username: 'user1',
    },
    {
        email: 'user2@ex.com',
        username: 'user2',
    }
]

async function allUser(req, res, next) {
    let dbUsers = await userModel.find().exec();
    res.json(dbUsers).status(200);
}

class HttpError extends Error {
    constructor(message, errorCode) {
        super(message);
        this.statusCode = errorCode
    }
}

async function createUser(req, res, next) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(422).json({
            errors: errors.array()
        });

        // throw new HttpError('my eorro.', 404);     
    }

    const {
        email,
        username,
        phone,
    } = req.body;

    // users.push({
    //     email,
    //     username
    // })

    let newUser = await new userModel({
        email,
        username,
        phone,
    }).save();

    res.status(201).json([
        req.body,
        newUser
    ])
}

async function registerUser(req, res, next) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(422).json({
            errors: errors.array()
        });
        // throw new HttpError('my eorro.', 404);     
    }

    const {
        email,
        username,
        password,
    } = req.body;

    let hashPassword = await bcrypt.hash(password, 10);

    let newUser = await new userModel({
        email,
        username,
        password: hashPassword,
    }).save();

    let token = await jwt.sign({
        email,
        username,
        _id: newUser._id,
    }, 'do_not_share');

    return res.status(201).json({
        email,
        username,
        role: newUser.role,
        token,
    })
}

async function loginUser(req, res, next) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(422).json({
            errors: errors.array()
        });
        // throw new HttpError('my eorro.', 404);     
    }

    email = req.body.email;
    password = req.body.password;

    // let result = users.find(i => i.email === email);
    let user = await userModel.findOne({
        email
    }).exec();

    if (user) {
        // console.log(user);
        let chekPass = await bcrypt.compare(password, user.password);
        if (chekPass) {
            const {
                email,
                username,
                phone,
                role,
                _id,
            } = user;
            
            let token = await jwt.sign({
                email,
                username,
                _id
            }, 'do_not_share');

            return res.status(200).json({
                email,
                username,
                role,
                phone,
                token
            });
        } else {
            let errors = {
                errors: [{
                    param: 'password',
                    msg: 'password incorrect'
                }],
                msg: 'validation error'
            };

            return res.status(422).json(errors);
        }
    } else {
        return res.status(404).json("user not found");
    }
}

async function getUser(req, res, next) {
    id = req.params.id;
    // let result = users.find(i => i.email === email);
    let user = await userModel.findById(id);
    return res.status(200).json({user,data: req.userData});
}

async function checkUser(req, res, next) {
    id = req.userData._id;
    let user = await userModel.findById(id);
    return res.status(200).json({
        user_id: user._id,
        username: user.username,
        email: user.email,
        role: user.role,
        phone: user.phone,
    });
}

function deleteUser(req, res, next) {
    email = req.params.email;
    let index = users.findIndex(i => i.email === email);
    users.splice(index, 1)
    return res.json(users).status(200);
}

exports.allUser = allUser;
exports.createUser = createUser;
exports.registerUser = registerUser;
exports.loginUser = loginUser;
exports.getUser = getUser;
exports.checkUser = checkUser;
exports.deleteUser = deleteUser;