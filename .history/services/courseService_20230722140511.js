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

  exports.updateCourseById =asyncHandler( async(req, res, next)=>{

      const course= await Course.findByIdAndUpdate(req.params.courseId, req.body)
      if (!course)
       return next(new ErrorHandle({message:'failed updated course', statusCode:404}));

       res
       .status(204)
       .json({message:'updated course', category})
  })
  exports.delDocumentById= asyncHandler( async(req, res, next)=>{
    const course= await Course.findByIdAndRemove(req.params.courseId)
    if (!course)
     return next(new ErrorHandle({message:'failed removed course', statusCode:404}));

     res
     .status(204)
     .json({message:'course deleted', course})
})





