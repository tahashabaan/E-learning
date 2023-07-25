const asyncHandler = require('express-async-handler')

const Category =require("../models/category");
const ErrorHandle = require('../utils/errorHandle');

   exports.insertDocument =asyncHandler(async(req, res, next)=>{
    const catagory = await Category.create(req.body)
        if(!catagory)
         { return next(new ErrorHandle({message:'failed insert category',statusCode:404}));}

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
      let {size, page} = req.query;
      size = size? size:10;
      const skip = (page-1 ) * size;
      const totalPage =Math.ceil(await Category.countDocuments()/size);

      const category= await Category.find({}).limit(size).skip(skip);
       if(!category){
         return next(new ErrorHandle({message:'failed fetch categorys', statusCode:404}))};

       res.status(202).json({
         message: ' document
         documents:category}) 
 })

    exports.updateDocumentById =(req, res, next)=>{
        category
        .findByIdAndUpdate(req.params.categoryId, req.body)
        .then(cat => res.status(204).json({message:'updated category', category:cat}))
         .catch(err =>res.status(404).json({message:'failed updated category', error:err}));
    }
    exports.delDocumentById= (req, res, next)=>{
        category
        .findByIdAndRemove(req.params.categoryId)
        .then(cat => {
            res.status(204).json({message:'deleted category', category:cat})
         })
         .catch(err => res.status(404).json({message:'failed delete category', error:err}));

    }



