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
    .no
    .isMongoId()
    .withMessage('must be mongooseid'),
    validationMiddleware
]
