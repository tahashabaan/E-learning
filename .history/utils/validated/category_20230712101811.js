const {check}  =require('express-validator');

const validationMiddleware = require('../../middleware/validetorMddleware');

exports.postCategoryValidated = [
    check('name')
    .isEmpty()
    .withMessage('name must be exi'),
    validationMiddleware
]

