const asyncHandler = require('express-async-handler')
const multer = require('multer');

const documentHandle = require('./documents');
const {uploadImage} = require('../middleware/uploadFile');
const Course = require('../models/course');
const ErrorHandle = require('../utils/errorHandle');


exports.uploadMiddleware = uploadImage('courses').single('image')

exports.createCourse = documentHandle.insertDocument(Course);


exports.getCourses = documentHandle.getDocuments(Course);
exports.getCourseById =documentHandle.getDocumentById(Course)
exports.updateCourseById =documentHandle.updateDocumentById(Course)
exports.delCourseById= documentHandle.delDocumentById(Course)




