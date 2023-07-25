const {check}  =require('express-validator');

const validationMiddleware = require('../../middleware/validetorMddleware');

exports.createUserValidated = [
    check('name')
    .notEmpty()
    .withMessage('name must be defined'),
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