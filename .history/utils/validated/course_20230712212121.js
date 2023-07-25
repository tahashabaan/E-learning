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
    .withMessage('course ra must be number')
    .notEmpty()
    .withMessage('course class must be specified'),




]