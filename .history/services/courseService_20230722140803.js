
const documentHandle = require('./documents');
const Course = require('../models/course');
const {uploadImage} = require('../middleware/uploadFile');


exports.uploadMiddleware = uploadImage('courses').single('image')

exports.createCourse = documentHandle.insertDocument(Course);
exports.getCourses = documentHandle.getDocuments(Course);
exports.getCourseById =documentHandle.getDocumentById(Course)
exports.updateCourseById =documentHandle.updateDocumentById(Course)
exports.delCourseById= documentHandle.delDocumentById(Course)




