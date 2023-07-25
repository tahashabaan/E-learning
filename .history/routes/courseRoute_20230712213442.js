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
.get()
.post(createCoursevalidated,
    courseServices.inse)

.route('/courses/courseId')
.get(getCourseValidated,
    )
.put(updateCourseValidated,
    )
.delete(delCourseValidated,
    )