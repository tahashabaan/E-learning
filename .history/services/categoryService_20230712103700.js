const asyncHandler = require('express-async-handler')

const Category =require("../models/category");
const ErrorHandle = require('../utils/errorHandle');

   exports.insertDocument =asyncHandler(async(req, res, next)=>{
    const catagory = await Category.create(req.body)
        if(!catagory)
         {
           return next(new ErrorHandle({message:'failed insert category',statusCode:404}));}
           
           console.log(catagory);
          res.status(204).json({message:'sucessfuly insert document', document:catagory});
    })

    exports.getDocuments=asyncHandler(async(req, res, next)=>{
         let {size, page} = req.query;
         size = size? size:10;
         const skip = (page-1 ) * size;
         const totalPage =Math.ceil(await Category.countDocuments()/size);

         const category= await Category.find({}).limit(size).skip(skip);
          if(!category){
            return next(new ErrorHandle({message:'failed fetch categorys', statusCode:404}))};

          res.status(202).json({
            message: ' documents',
            results:category.length,
            totalPage, 
            documents:category}) 
    })

    exports.getDocumentById =asyncHandler(async(req, res, next)=>{
     
      const category= await Category.findById(req.params.categoryId);
       if(!category){
         return next(new ErrorHandle({message:'failed fetch category', statusCode:404}))};

       res.status(202).json({
         message: ' document',
         documents:category}) 
 })

    exports.updateDocumentById =asyncHandler( async(req, res, next)=>{

        const category= await Category.findByIdAndUpdate(req.params.categoryId, req.body)
        if (!category)
         return next(new ErrorHandle({message:'failed updated category', statusCode:404}));

         res
         .status(204)
         .json({message:'updated category', category})
    })
    exports.delDocumentById= asyncHandler( async(req, res, next)=>{
      const category= await Category.findByIdAndRemove(req.params.categoryId)
      if (!category)
       return next(new ErrorHandle({message:'failed removed category', statusCode:404}));

       res
       .status(204)
       .json({message:'category deleted', category})
  })



