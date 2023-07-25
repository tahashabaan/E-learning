const { Router } =require("express");

const categoryService = require("../services/categoryService");
const subCategoryRoute = require("./subCategoryRoute");

const {postCategoryValidated, 
       getCategoryValidetor, 
       updateCategoryValidetor, 
       delCategoryValidetor} = require('../utils/validated/category');

const categoryRoute = Router();


categoryRoute.use('/:categoryId/subCategory', subCategoryRoute);
categoryRoute
.route('/')
.get(categoryService.getCategorys)
.post(postCategoryValidated,categoryService.createCaregory)

categoryRoute
.route('/:categoryId')
.get(getCategoryValidetor,
     categoryService.getCategoryById)
.put(updateCategoryValidetor,
     categoryService.update)
.delete(delCategoryValidetor,
        categoryService.delDocumentById)

module.exports= categoryRoute