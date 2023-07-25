const { Router } =require("express");

const subCategoryService = require("../services/subCategoryService");

const {createSubCategoryValidated, 
       getSubCategoryValidated, 
       updateSubCategoryValidated, 
       delSubCategoryValidated} = require('../utils/validated/subCategory');

const categoryRoute = Router();



categoryRoute
.route('/')subCategoryService
.get(subCategoryService.getDocuments)
.post(postCategoryValidated,subCategoryService.insertDocument)

categoryRoute
.route('/:categoryId')
.get(getCategoryValidetor,
     subCategoryService.getDocumentById)
.put(updateCategoryValidetor,
     subCategoryService.updateDocumentById)
.delete(delCategoryValidetor,
        subCategoryService.delDocumentById)

module.exports= categoryRoute