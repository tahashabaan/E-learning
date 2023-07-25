const { Router } =require("express");

const categoryService = require("../services/categoryService");
const subCategoryService = require("../services/subCategoryService");

const {postCategoryValidated, 
       getCategoryValidetor, 
       updateCategoryValidetor, 
       delCategoryValidetor} = require('../utils/validated/category');

const categoryRoute = Router();


categoryRoute.use('/:categoryId/subCategory',subCategoryService.getDocuments);
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