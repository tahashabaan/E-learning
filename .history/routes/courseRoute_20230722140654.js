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
.route('/:id')
.get(getCourseValidated,
    courseServices.getCById
    )
.put(updateCourseValidated,
    courseServices.updateCById
    )
.delete(delCourseValidated,
       courseServices.delCById);ourse



 module.exports = router;