const {check}  =require('express-validator');

const validationMiddleware = require('../../middleware/validetorMddleware');

exports.postCategoryValidated = [
    check('name')
    .isEmpty()
    .withMessage('name must be exicted'),
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

exports.getCategoryValidetor =[
    check('categoryId')
    .notEmpty()
    .withMessage('categoryId must be exicted')
    .isMongoId()
    .withMessage('must be mongooseid'),
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