const asyncHandler = require('express-async-handler')
const multer = require('multer');

const Course = require('../models/course');
const ErrorHandle = require('../utils/errorHandle');

const fileFilter = () => {

}

const storage = multer.diskStorage({
    destination:function (req, file , cb) {
        cb(null,'uploads/courses' );
    },
  filename: function(req, res, file) {
    const filename =Date.now() + '-' + Math.round(Math.random() * 1E9)+'-' + file.originalname();
    cb(null, filename)
  }
})

const upload =multer({storage, fileFilter });

exports.uploadMiddleware = upload.single('image');

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
     
    const course= await Course.findById(req.params.courseId);
     if(!course){
       return next(new ErrorHandle({message:'failed fetch course', statusCode:404}))};

     res.status(202).json({
       message: ' document',
       documents:course}) 
})

  exports.updateDocumentById =asyncHandler( async(req, res, next)=>{

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





