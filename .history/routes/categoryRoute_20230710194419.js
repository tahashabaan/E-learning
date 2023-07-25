const { Router } =require("express");

const Category = require("../services/categoryService");

const categoryRoute = Router()
console.log(Category);
let categoryService;
const intialObject = (req, res , next) => {
   return new Category(req, res, next);
}

console.log(intialObject().req);

categoryRoute.get('/',intialObject);

// categoryRoute
// .route('/')
// .get(categoryService.getDocuments)
// .post(categoryService.insertDocument)

// categoryRoute
// .route('/:categoryId')
// .get(categoryService.getDocumentById)
// .put(categoryService.updateDocumentById)
// .delete(categoryService.delDocumentById)

module.exports= categoryRoute