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
    .notEmpty()
    .withMessage('must be exicted')
    .isMongoId()
    .withMessage('categoryId must be mongoId')
    .custom(async val => {
        const category =  await Category.findById(val);
        if(!category)
         return Promise.reject(new Error('categoryId not found:'+ val))
         return true;
    }),
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