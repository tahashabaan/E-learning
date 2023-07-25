const slugify = require('slugify');
const bcrypt = require('bcryptjs')
const {check}  =require('express-validator');

const User = require('../../models/user');
const validationMiddleware = require('../../middleware/validetorMddleware');

exports.signUpValidated = [
    check('name')
    .notEmpty()
    .withMessage('name must be defined')
    .custom((val, {req}) =>  req.body.slug= slugify(val) ),
    check('email')
    .isEmail()
    .withMessage('accept email only..')
    .notEmpty()
    .withMessage('email must be defined'),
    check('password')
    .notEmpty()
    .withMessage('password must be defined')
    .isLength({min: 6})
    .withMessage('min password is 6'),
    // .custom( async (val, {req}) => {
    //    const saltPass = await bcrypt.genSalt(10);
    //    const hashPassword = await bcrypt.hash(val, saltPass)
    //   if(hashPassword) {
    //     req.body.password= hashPassword;
    //     return true;
    // }
    //   throw new Error('somthing went wrong!..')
    // }),
    check('confirmPassword')
    .notEmpty()
    .withMessage('confirmPassword must be defined')
    .isLength({min: 6})
    .withMessage('min password is 6')
    .custom(async (val, {req}) => {
        if(!(bcrypt.compare(val, req.body.password))) 
          return Promise.reject(new Error('password not matched'))
    }),
    validationMiddleware
]
