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
.get(courseServices.ge)
.post(createCoursevalidated,
    courseServices.insertDocument)

router
.route('/:id')
.get(getCourseValidated,
    courseServices.getDocumentById
    )
.put(updateCourseValidated,
    courseServices.updateDocumentById
    )
.delete(delCourseValidated,
       courseServices.delDocumentById);



 module.exports = router;