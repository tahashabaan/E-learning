const asyncHandler = require('express-async-handler')

const Course = require('../models/course');
const ErrorHandle = require('../utils/errorHandle');

exports.insertDocument = asyncHandler(async (req, res, next) =>{
    const course = await Course.create(req.body);
    if(!course) 
    return next(new ErrorHandle({message: 'failed insert course' , statusCode:404}));

    return res.status(204).json({message:'sucessfuly insert document', document:course});
})

exports.getDocuments = asyncHandler(async (req, res, next) => {

})



