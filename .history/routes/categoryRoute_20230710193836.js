const { Router } =require("express");

const Category = require("../services/categoryService");

const categoryRoute = Router()

let categoryService;
const intialObject = (req, res , next) => {
    categoryService = new Category(req, res, next);
}

categoryRoute.use(intialObject);

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