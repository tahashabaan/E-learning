const documentHandle = require('./documents');
const DisCount = require('../models/course');
const {uploadImage} = require('../middleware/uploadFile');



exports.createCode = documentHandle.insertDocument(DisCount);

exports.getCodes = documentHandle.getDocuments(Course);
// exports.getCourseById =documentHandle.getDocumentById(Course)
// exports.updateCourseById =documentHandle.updateDocumentById(Course)
// exports.delCourseById= documentHandle.delDocumentById(Course)




