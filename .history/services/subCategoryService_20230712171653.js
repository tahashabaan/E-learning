const asyncHandler = require('express-async-handler')

const SubCategory =require("../models/subCategory");
const ErrorHandle = require('../utils/errorHandle');

   exports.insertDocument =asyncHandler(async(req, res, next)=>{
    const catagory = await SubCategory.create(req.body)
        if(!catagory)
         {
           return next(new ErrorHandle({message:'failed insert category',statusCode:404}));}
           
           console.log(catagory);
          return res.status(204).json({message:'sucessfuly insert document', document:catagory});
    })

    exports.getDocuments=asyncHandler(async(req, res, next)=>{
         let {size, page} = req.query;
         size = size? size:10;
         const skip = (page-1 ) * size;
         const totalPage =Math.ceil(await SubCategory.countDocuments()/size);

         const category= await SubCategory.find({}).limit(size).skip(skip);
          if(!category){
            return next(new ErrorHandle({message:'failed fetch categorys', statusCode:404}))};

          res.status(202).json({
            message: ' documents',
            results:category.length,
            totalPage, 
            documents:category}) 
    })

    exports.getDocumentById =asyncHandler(async(req, res, next)=>{
     
      const category= await SubCategory.findById(req.params.categoryId);
       if(!category){
         return next(new ErrorHandle({message:'failed fetch category', statusCode:404}))};

       res.status(202).json({
         message: ' document',
         documents:category}) 
 })

    exports.updateDocumentById =asyncHandler( async(req, res, next)=>{

        const category= await SubCategory.findByIdAndUpdate(req.params.categoryId, req.body)
        if (!category)
         return next(new ErrorHandle({message:'failed updated category', statusCode:404}));

         res
         .status(204)
         .json({message:'updated category', category})
    })
    exports.delDocumentById= asyncHandler( async(req, res, next)=>{
      const category= await SubCategory.findByIdAndRemove(req.params.categoryId)
      if (!category)
       return next(new ErrorHandle({message:'failed removed category', statusCode:404}));

       res
       .status(204)
       .json({message:'category deleted', category})
  })



