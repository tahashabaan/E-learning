const
const {check}  =require('express-validator');
const validationMiddleware = require('../../middleware/validetorMddleware');

exports.createUserValidated = [
    check('name')
    .notEmpty()
    .withMessage('name must be defined'),
    check('email')
    .isEmail()
    .withMessage('accept email only..')
    .notEmpty()
    .withMessage('email must be defined'),
    check('password')
    .notEmpty()
    .withMessage('password must be defined')
    .isLength({min: 6})
    .withMessage('min password is 6')
    .custom((val, {req}) => {
       
    // check passsword with cnfirm
    }),
    check('name')
    .notEmpty()
    .withMessage('name must be defined'),
    validationMiddleware
]

exports.getCategoryValidetor =[
    check('categoryId')
    .notEmpty()
    .withMessage('categoryId must be exicted')
    .isMongoId()
    .withMessage('must be mongooseid'),
    validationMiddleware
]

exports.updateCategoryValidetor =[
    check('categoryId')
    .notEmpty()
    .withMessage('categoryId must be exicted')
    .isMongoId()
    .withMessage('must be mongooseid'),
    validationMiddleware
]

exports.delCategoryValidetor =[
    check('categoryId')
    .notEmpty()
    .withMessage('categoryId must be exicted')
    .isMongoId()
    .withMessage('must be mongooseid'),
    validationMiddleware
]