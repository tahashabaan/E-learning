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
.get(courseServices.getDocuments)
.post(createCoursevalidated,
    courseServices.insertDocument)

.route('/:/courseId')
.get(getCourseValidated,
    courseServices.getDocumentById
    )
.put(updateCourseValidated,
    courseServices.updateDocumentById
    )
.delete(delCourseValidated,
       courseServices.delDocumentById);



 module.exports = router;