const slugify = require('slugify');
const {check} = require('express-validator');

const validatedMiddleware = require('../../middleware/validetorMddleware');


exports.createSubCategoryValidated = [
    check('name')
    .notEmpty()
    .withMessage('name subCategory Required')
    .custom(val => {
        slugify 
    }),
    validatedMiddleware 
]
