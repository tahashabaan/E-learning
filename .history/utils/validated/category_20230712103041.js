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
    .isMongoId()
    .withMessage('must be mongo'),
    validationMiddleware
]
