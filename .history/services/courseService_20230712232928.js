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
    let {size, page} = req.query;
    size = size? size:10;
    const skip = (page-1) *size;
    const totalPage =Math.ceil(await Category.countDocuments()/size);
   
    const course= await Course.find({}).limit(size).skip(skip);
    if(!course){
      return next(new ErrorHandle({message:'failed fetch course', statusCode:404}))};

    res.status(202).json({
      message: ' documents',
      results:course.length,
      totalPage, 
      documents:course}) 

})


exports.getDocumentById =asyncHandler(async(req, res, next)=>{
     
    const category= await Course.findById(req.params.categoryId);
     if(!category){
       return next(new ErrorHandle({message:'failed fetch category', statusCode:404}))};

     res.status(202).json({
       message: ' document',
       documents:category}) 
})

  exports.updateDocumentById =asyncHandler( async(req, res, next)=>{

      const category= await Course.findByIdAndUpdate(req.params.categoryId, req.body)
      if (!category)
       return next(new ErrorHandle({message:'failed updated category', statusCode:404}));

       res
       .status(204)
       .json({message:'updated category', category})
  })
  exports.delDocumentById= asyncHandler( async(req, res, next)=>{
    const category= await Course.findByIdAndRemove(req.params.categoryId)
    if (!category)
     return next(new ErrorHandle({message:'failed removed category', statusCode:404}));

     res
     .status(204)
     .json({message:'category deleted', category})
})





