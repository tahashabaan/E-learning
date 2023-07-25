const { Router } =require("express");

const categoryService = require("../services/categoryService");

const categoryRoute = Router();
console.log(Category);
let categoryService;


console.log(categoryService);

// categoryRoute.get('/',intialObject);

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