const { Router } =require("express");

const Category = require("../services/categoryService");

const categoryRoute = Router();


console.log(new categoryService);
let categoryService;
categoryRoute.use('/', (req, res, next)=>{
    categoryService=(new Category(req, res, next))
});

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