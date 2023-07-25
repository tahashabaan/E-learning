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
.route('/courses')
.get(course)
.post(createCoursevalidated,
    courseServices.insertDocument)

.route('/courses/courseId')
.get(getCourseValidated,
    )
.put(updateCourseValidated,
    )
.delete(delCourseValidated,
    )