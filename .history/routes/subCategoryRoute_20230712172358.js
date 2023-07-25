const { Router } =require("express");

const subCategoryService = require("../services/subCategoryService");

const {createSubCategoryValidated, 
       getSubCategoryValidated, 
       updateSubCategoryValidated, 
       delSubCategoryValidated} = require('../utils/validated/subCategory');

const categoryRoute = Router();



categoryRoute
.route('/')
.get(subCategoryService.getDocuments)
.post(createSubCategoryValidated,subCategoryService.insertDocument)

categoryRoute
.route('/:categoryId')
.get(getSubCategoryValidated,
     subCategoryService.getDocumentById)
.put(upda,
     subCategoryService.updateDocumentById)
.delete(delCategoryValidetor,
        subCategoryService.delDocumentById)

module.exports= categoryRoute