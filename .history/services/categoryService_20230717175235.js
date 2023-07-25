const asyncHandler = require('express-async-handler')

const Category =require("../models/category");
const ErrorHandle = require('../utils/errorHandle');
const documentHamdle = require('./documents');

   exports.createCaregory = documentHamdle.insertDocument(Category);

    exports.getCategorys=  documentHamdle.getDocuments(Category);

    exports.getCategoryById =documentHamdle.getDocuments(Category);

    exports.updateDocumentById =documentHamdle.getDocuments(Category);
    exports.delDocumentById= asyncHandler( async(req, res, next)=>{
      const category= await Category.findByIdAndRemove(req.params.categoryId)
      if (!category)
       return next(new ErrorHandle({message:'failed removed category', statusCode:404}));

       res
       .status(204)
       .json({message:'category deleted', category})
  })



