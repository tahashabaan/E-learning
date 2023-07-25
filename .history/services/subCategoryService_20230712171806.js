const asyncHandler = require('express-async-handler')

const SubCategory =require("../models/subCategory");
const ErrorHandle = require('../utils/errorHandle');

   exports.insertDocument =asyncHandler(async(req, res, next)=>{
    const subCate = await SubCategory.create(req.body)
        if(!subCate)
         {
           return next(new ErrorHandle({message:'failed insert category',statusCode:404}));}
           
           console.log(subCate);
          return res.status(204).json({message:'sucessfuly insert document', document:subCate});
    })

    exports.getDocuments=asyncHandler(async(req, res, next)=>{
         let {size, page} = req.query;
         size = size? size:10;
         const skip = (page-1 ) * size;
         const totalPage =Math.ceil(await SubCategory.countDocuments()/size);

         const subCate= await SubCategory.find({}).limit(size).skip(skip);
          if(!category){
            return next(new ErrorHandle({message:'failed fetch categorys', statusCode:404}))};

          res.status(202).json({
            message: ' documents',
            results:subCate.length,
            totalPage, 
            documents:subCate}) 
    })

    exports.getDocumentById =asyncHandler(async(req, res, next)=>{
     
      const subCate= await SubCategory.findById(req.params.categoryId);
       if(!subCate){
         return next(new ErrorHandle({message:'failed fetch category', statusCode:404}))};

       res.status(202).json({
         message: ' document',
         documents:category}) 
 })

    exports.updateDocumentById =asyncHandler( async(req, res, next)=>{

        const subCate= await SubCategory.findByIdAndUpdate(req.params.categoryId, req.body)
        if (!subCate)
         return next(new ErrorHandle({message:'failed updated category', statusCode:404}));

         res
         .status(204)
         .json({message:'updated category', category})
    })
    exports.delDocumentById= asyncHandler( async(req, res, next)=>{
      const subCate= await SubCategory.findByIdAndRemove(req.params.categoryId)
      if (!subCate)
       return next(new ErrorHandle({message:'failed removed category', statusCode:404}));

       res
       .status(204)
       .json({message:'category deleted', subCate})
  })



