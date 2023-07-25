const slugify = require('slugify');
const {check} = require('express-validator');

const validatedMiddleware = require('../../middleware/validetorMddleware');


exports.createSubCategoryValidated = [
    check('name')
    .notEmpty()
    .withMessage('name subCategory Required')
    .custom((val, {req}) => {
      return req.body.slug =slugify(val);
    }),
    validatedMiddleware 
]

exports.getSubCategoryValidated = [
    check('subCategoryId')
.isMongoId('')
]
