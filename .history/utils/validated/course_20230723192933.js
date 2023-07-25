const slugify = require('slugify');
const {check} = require('express-validator');

const Category =require('../../models/category');
const SubCategory =require('../../models/subCategory');
const Instructor =require('../../models/user');


const validetorMddleware = require('../../middleware/validetorMddleware');


exports.createCoursevalidated=[
    check('name')
    .notEmpty()
    .withMessage('course name must be specified')
    .custom((val, {req}) =>{
        return req.body.slug=slugify(val)
    }),
    check('description')
    .notEmpty()
    .withMessage('course description must be specified'),
    check('class')
    .notEmpty()
    .withMessage('course class must be specified'),
    check('price')
    .isNumeric()
    .withMessage('course price must be number')
    .notEmpty()
    .withMessage('course class must be specified'),
    check('rating')
    .isNumeric()
    .withMessage('course rating must be number')
    .notEmpty()
    .withMessage('course class must be specified')
    .isLength({min:1, max:5})
    .withMessage('course rating must be between 1 and 5'),
    check('category')
    .isMongoId()
    .withMessage('course category must be mongoId')
    .notEmpty()
    .withMessage('course category must be specified')
    .custom( async val => {
      const category =  await Category.findById(val);
      if(!category)
       return Promise.reject(new Error('categoryId not found:'+ val))

       return true;
    }),
    check('subCategory')
    .isMongoId()
    .withMessage('SubCategory must be mongoId')
    .optional()
    .custom( async val => {
      const subCategory =  await SubCategory.findById(val);
      if(!subCategory)
       return Promise.reject(new Error('subCategoryId not found:'+ val))

       return true;
    }),
    check('instructor')
    .isMongoId()
    .withMessage('course instructor must be mongoId')
    .notEmpty()
    .withMessage('course instructor must be specified')
    .custom( async val => {
        const instructor =  await Instructor.findById(val);
        if(!instructor)
          return Promise.reject(new Error('instructor not found:'+ val))
  
         return true;
      }),
    // check('content')
    // .isMongoId()
    // .withMessage('course content must be mongoId')
    // .notEmpty()
    // .withMessage('course content must be specified'),

validetorMddleware
]

exports.getCourseValidated = [
    check('courseId')
   .isMongoId('courseId must be MongoId')
   .notEmpty()
   .withMessage('courseId must be spcified'),
    validetorMddleware
]

exports.updateCourseValidated = [
    check('courseId')
   .isMongoId('courseId must be MongoId')
   .notEmpty()
   .withMessage('courseId must be spcified'),
    validetorMddleware
]
exports.delCourseValidated = [
    check('courseId')
   .isMongoId('courseId must be MongoId')
   .notEmpty()
   .withMessage('courseId must be spcified'),
    validetorMddleware
]