const asyncHandler = require('express-async-handler')

const Category =require("../models/category");
const ErrorHandle = require('../utils/errorHandle');

   exports.insertDocument =asyncHandler(async(req, res, next)=>{
    const catagory = await Category.create(req.body)
        if(!catagory)
         { return next(new ErrorHandle({message:'failed insert category',statusCode:404}));}

          res.status(204).json({message:'sucessfuly insert document', document:catagory});
    })

    exports.getDocuments=async(req, res, next)=>{
         let {size, page} = req.query;
         size = size? size:10;
         const skip = (page-1 ) * size;
         const totalPage =Math.ceil(await Category.countDocuments()/size);

         const category= await Category.find({}).limit(size).skip(skip);
         if()
         res.status(404).json({message:'failed fetch categorys', error:err})
          res.status(202).json({message: ' documents',results:cat.length,totalPage, documents:cat, })
     

    }

    exports.getDocumentById =(req, res, next)=>{
        category
        .findById(req.params.categoryId)
        .then(cat => {
            res.then(cat => res.status(204).json({message:'category', category:cat}))
         })
         .catch(err => res.catch(err =>res.status(404).json({message:'failed fetch category', error:err})) );

    }

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



