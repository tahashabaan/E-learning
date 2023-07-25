const { Router } =require("express");

const categoryService = require("../services/categoryService");

const categoryRoute = Router();


console.log(categoryService());

categoryRoute.get('/', categoryService);
console.log(categoryService());

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