const { Router } =require("express");

const Category = require("../services/categoryService");

const categoryRoute = Router();


let categoryService;
categoryRoute.use('/', async (req, res, next)=>{
    categoryService=(new Category(req, res, next))
// console.log(categoryService)
});

// if console.log(categoryService)

// categoryRoute
// .route('/')
// .get(categoryService.getDocuments())
// .post(categoryService.insertDocument)

// categoryRoute
// .route('/:categoryId')
// .get(categoryService.getDocumentById)
// .put(categoryService.updateDocumentById)
// .delete(categoryService.delDocumentById)

module.exports= categoryRoute