const asyncHandler = require('express-async-handler')
const slugify = require('slugify');

const SubCategory =require("../models/subCategory");
const ErrorHandle = require('../utils/errorHandle');


exports.setCategoryIdToBody = (req, res, next) => {
  if(!req.body.categoryId) req.body.categoryId=req.params.categoryId;
  next();
} 
   exports.insertDocument =asyncHandler(async(req, res, next)=>{
   
     req.body.slug=slugify(req.body.name);
    const subCategory = await SubCategory.create(req.body) 
    if(subCategory)
    return res.status(204).json({message:'sucessfuly insert document', document:subCategory});
    
        next(new ErrorHandle({message:'failed insert category',statusCode:404}));
    })

    exports.getDocuments=asyncHandler(async(req, res, next)=>{
      console.log(req.params)
         let {size, page} = req.query;
         size = size? size:10;
         const skip = (page-1 ) * size;
         const totalPage =Math.ceil(await SubCategory.countDocuments()/size);
        let filterObj ={};
        if(req.params.categoryId) 
          filterObj={categoryId:req.params.categoryId};
          const subCategory= await SubCategory.find(filterObj).limit(size).skip(skip);
          if(!subCategory){
            return next(new ErrorHandle({message:'failed fetch categorys', statusCode:404}))};

          res.status(202).json({
            message: ' documents',
            results:subCategory.length,
            totalPage, 
            documents:subCategory}) 
    })

    exports.getDocumentById =asyncHandler(async(req, res, next)=>{
     
      const subCategory= await SubCategory.findById(req.params.subCategoryId);
       if(!subCategory){
         return next(new ErrorHandle({message:'failed fetch subCategoryId', statusCode:404}))};

       res.status(202).json({
         message: ' document',
         documents:subCategoryId}) 
 })

    exports.updateDocumentById =asyncHandler( async(req, res, next)=>{

        const subCategory= await SubCategory.findByIdAndUpdate(req.params.categoryId, req.body)
        if (!subCategory)
         return next(new ErrorHandle({message:'failed updated category', statusCode:404}));

         res
         .status(204)
         .json({message:'updated category', category})
    })
    exports.delDocumentById= asyncHandler( async(req, res, next)=>{
      const subCategory= await SubCategory.findByIdAndRemove(req.params.categoryId)
      if (!subCategory)
       return next(new ErrorHandle({message:'failed removed category', statusCode:404}));

       res
       .status(204)
       .json({message:'category deleted', subCategory})
  })



