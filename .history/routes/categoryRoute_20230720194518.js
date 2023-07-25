const { Router } =require("express");

const isAuth = require('../middleware/isAuth');
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
.post(,isAuthpostCategoryValidated,categoryService.createCaregory)

categoryRoute
.route('/:id')
.get(getCategoryValidetor,
     categoryService.getCategoryById)
.put(updateCategoryValidetor,
     categoryService.updateCategoryById)
.delete(delCategoryValidetor,
        categoryService.delCategoryById)

module.exports= categoryRoute