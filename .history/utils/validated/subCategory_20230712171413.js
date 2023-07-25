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
    check('categoryId')
    .notEmpty('must be exicted')
    .isMongoId()
    validatedMiddleware 
]

exports.getSubCategoryValidated = [
    check('subCategoryId')
   .isMongoId()
   .withMessage('subCategoryId must be mongoId'),
   validatedMiddleware
]

exports.updateSubCategoryValidated = [
    check('subCategoryId')
   .isMongoId()
   .withMessage('subCategoryId must be mongoId'),
   validatedMiddleware
]

exports.delSubCategoryValidated = [
    check('subCategoryId')
   .isMongoId()
   .withMessage('subCategoryId must be mongoId'),
   validatedMiddleware
]