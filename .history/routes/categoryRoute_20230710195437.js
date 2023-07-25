const { Router } =require("express");

const categoryService = require("../services/categoryService");

const categoryRoute = Router();


console.log(new categoryService);

categoryRoute.use('/', (req, res, next)=>{
    new categoryService(req, res, next)
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