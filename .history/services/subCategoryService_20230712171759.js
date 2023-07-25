const asyncHandler = require('express-async-handler')

const SubCategory =require("../models/subCategory");
const ErrorHandle = require('../utils/errorHandle');

   exports.insertDocument =asyncHandler(async(req, res, next)=>{
    const su = await SubCategory.create(req.body)
        if(!su)
         {
           return next(new ErrorHandle({message:'failed insert category',statusCode:404}));}
           
           console.log(su);
          return res.status(204).json({message:'sucessfuly insert document', document:su});
    })

    exports.getDocuments=asyncHandler(async(req, res, next)=>{
         let {size, page} = req.query;
         size = size? size:10;
         const skip = (page-1 ) * size;
         const totalPage =Math.ceil(await SubCategory.countDocuments()/size);

         const su= await SubCategory.find({}).limit(size).skip(skip);
          if(!category){
            return next(new ErrorHandle({message:'failed fetch categorys', statusCode:404}))};

          res.status(202).json({
            message: ' documents',
            results:su.length,
            totalPage, 
            documents:su}) 
    })

    exports.getDocumentById =asyncHandler(async(req, res, next)=>{
     
      const su= await SubCategory.findById(req.params.categoryId);
       if(!su){
         return next(new ErrorHandle({message:'failed fetch category', statusCode:404}))};

       res.status(202).json({
         message: ' document',
         documents:category}) 
 })

    exports.updateDocumentById =asyncHandler( async(req, res, next)=>{

        const su= await SubCategory.findByIdAndUpdate(req.params.categoryId, req.body)
        if (!su)
         return next(new ErrorHandle({message:'failed updated category', statusCode:404}));

         res
         .status(204)
         .json({message:'updated category', category})
    })
    exports.delDocumentById= asyncHandler( async(req, res, next)=>{
      const su= await SubCategory.findByIdAndRemove(req.params.categoryId)
      if (!su)
       return next(new ErrorHandle({message:'failed removed category', statusCode:404}));

       res
       .status(204)
       .json({message:'category deleted', su})
  })



