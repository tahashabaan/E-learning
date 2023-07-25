const asyncHandler = require('express-async-handler')

const Course = require('../models/course');
const ErrorHandle = require('../utils/errorHandle');

exports.insertDocument = asyncHandler(async (req, res, next) =>{
    const course = await Course.create(req.body);
    if(!course) 
  return next(new ErrorHandle({message: 'failed insert category' }))

})



