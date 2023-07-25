const documentHandle = require('./documents');
const DisCount = require('../models/course');
const {uploadImage} = require('../middleware/uploadFile');


exports.uploadMiddleware = uploadImage('courses').single('image')

exports.createCode = documentHandle.insertDocument(DisCount);

// exports.getCourses = documentHandle.getDocuments(Course);
// exports.getCourseById =documentHandle.getDocumentById(Course)
// exports.updateCourseById =documentHandle.updateDocumentById(Course)
// exports.delCourseById= documentHandle.delDocumentById(Course)




