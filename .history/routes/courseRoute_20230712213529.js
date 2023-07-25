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
.get(courseServices.getDocuments)
.post(createCoursevalidated,
    courseServices.insertDocument)

.route('/courses/courseId')
.get(getCourseValidated,
    )
.put(updateCourseValidated,
    courseServices.getDocuments
    )
.delete(delCourseValidated,
    )