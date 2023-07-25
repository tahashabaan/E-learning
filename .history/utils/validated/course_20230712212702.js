const slugify = require('slugify');
const {check} = require('express-validator');

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
    .withMessage('course category must be specified'),
    // check('instructor')
    // .isMongoId()
    // .withMessage('course instructor must be mongoId')
    // .notEmpty()
    // .withMessage('course instructor must be specified'),
    // check('content')
    // .isMongoId()
    // .withMessage('course content must be mongoId')
    // .notEmpty()
    // .withMessage('course content must be specified'),

validetorMddleware
]

exports.getCourseValidated = [
    check('courseId')
    .

    validetorMddleware
]