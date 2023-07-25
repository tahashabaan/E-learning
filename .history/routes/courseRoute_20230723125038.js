const {Router} = require('express');

const courseServices = require('../services/courseService');
const{
createCoursevalidated,
getCourseValidated,
updateCourseValidated,
delCourseValidated
} = require('../utils/validated/course');

const router =Router();

router
.route('/')
.get(courseServices.getCourses)
.post(createCoursevalidated,
    courseServices.createCourse)

router
.route('/:nmae')
.get(getCourseValidated,
    courseServices.getCourseById
    )
.put(updateCourseValidated,
    courseServices.updateCourseById
    )
.delete(delCourseValidated,
       courseServices.delCourseById);



 module.exports = router;