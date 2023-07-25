const { Router } =require("express");

const categoryService = require("../services/categoryService");

const {postCategoryValidated, 
       getCategoryValidetor, 
       updateCategoryValidetor, 
       delCategoryValidetor} = require('../utils/validated/category')
const categoryRoute = Router();



categoryRoute
.route('/')
.get(categoryService.getDocuments)
.post(postCategoryValidated,categoryService.insertDocument)

categoryRoute
.route('/:categoryId')
.get(getCategoryValidetorcategoryService.getDocumentById)
.put(categoryService.updateDocumentById)
.delete(categoryService.delDocumentById)

module.exports= categoryRoute