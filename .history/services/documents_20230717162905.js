const asyncHandler = require('express-async-handler')
const slugify = require('slugify');

const SubCategory =require("../models/subCategory");
const ErrorHandle = require('../utils/errorHandle');


exports.setCategoryIdToBody = (req, res, next) => {
  if(!req.body.categoryId) req.body.categoryId=req.params.categoryId;
  next();
} 

exports.filterObj = filter =>
 (req, res, next) => {
    req.filterObj ={};
    if(req.params.categoryId) 
      req.filterObj={categoryId:req.params.categoryId}

     next();
}
   exports.insertDocument = (doc, imgKey=null) =>
      asyncHandler(async(req, res, next)=>{
        if (imgKey !==null) {
          req.body.imgKey =req.filename
          console.log( req.body); 
      }
      const document = await doc.create(req.body) 
      if(document)
      return res.status(204).json({message:'sucessfuly insert document', document});

        next(new ErrorHandle({message:'failed insert document',statusCode:404}));
    })

    exports.getDocuments= doc =>
     asyncHandler(async(req, res, next)=>{
         let {size, page} = req.query;
         size = size? size:10;
         const skip = (page-1 ) * size;
         const totalPage =Math.ceil(await SubCategory.countDocuments()/size);
        let filterObj ={};
        if(req.params.categoryId) 
          filterObj={categoryId:req.params.categoryId};
        const document= await doc.find(req.filterObj).limit(size).skip(skip);
        if(!document){
         return next(new ErrorHandle({message:'failed fetch documents', statusCode:404}))};

          res.status(202).json({
            message: ' documents',
            results:document.length,
            totalPage, 
            documents:document}) 
    })

    exports.getDocumentById = (doc, id)=>
     asyncHandler(async(req, res, next)=>{
      const document= await doc.findById(id);
       if(!document){
         return next(new ErrorHandle({message:'failed fetch document', statusCode:404}))};

       res.status(202).json({
         message: ' document',
         document}) 
 })

    exports.updateDocumentById =(doc, id) =>
     asyncHandler( async(req, res, next)=>{
        const document= await doc.findByIdAndUpdate(id, req.body)
        if (!doc)
         return next(new ErrorHandle({message:'failed updated document', statusCode:404}));

         res
         .status(204)
         .json({message:'updated document', document})
    })
    exports.delDocumentById= (doc,id) =>
     asyncHandler( async(req, res, next)=>{
      const document= await doc.findByIdAndRemove(id)
      if (!document)
       return next(new ErrorHandle({message:'failed removed document', statusCode:404}));
       res
       .status(204)
       .json({message:'document deleted', document})
  })

