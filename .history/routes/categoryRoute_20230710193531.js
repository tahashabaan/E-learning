const { Router } =require("express");

const categoryService = require("../services/categoryService");

const categoryRoute = Router()
const intialObject = (req, res , next) => {
    categoryService = new categoryService(req, res, next);
}

ca
categoryRoute
.route('/')
.get(categoryService.getDocuments)
.post(categoryService.insertDocument)

categoryRoute
.route('/:categoryId')
.get(categoryService.getDocumentById)
.put(categoryService.updateDocumentById)
.delete(categoryService.delDocumentById)

module.exports= categoryRoute