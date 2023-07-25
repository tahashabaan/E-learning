const { Router } =require("express");

const subCategoryService = require("../services/subCategoryService");

const {createSubCategoryValidated, 
       getSubCategoryValidated, 
       updateSubCategoryValidated, 
       delSubCategoryValidated} = require('../utils/validated/subCategory');

const categoryRoute = Router();



categoryRoute
.route('/')
.get(categoryService.getDocuments)
.post(postCategoryValidated,categoryService.insertDocument)

categoryRoute
.route('/:categoryId')
.get(getCategoryValidetor,
     categoryService.getDocumentById)
.put(updateCategoryValidetor,
     categoryService.updateDocumentById)
.delete(delCategoryValidetor,
        categoryService.delDocumentById)

module.exports= categoryRoute