const slugify = require('slugify');
const {check} = require('express-validator');

const validetorMddleware = require('../../middleware/validetorMddleware');


exports.createCoursevalidated=[
    check('name')
    .notEmpty()
    .withMessage('course name must be specified')
    .custom((val) =>{
        return true
    })

]