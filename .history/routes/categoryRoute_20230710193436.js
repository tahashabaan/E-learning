const { Router } =require("express");

const categoryService = require("../services/categoryService");

const categoryRoute = Router()
const intialC = (req, res , next) => {
console.log(req, res, next);
}
categoryRoute
.route('/')
.get(mide,categoryService.getDocuments)
.post(categoryService.insertDocument)

categoryRoute
.route('/:categoryId')
.get(categoryService.getDocumentById)
.put(categoryService.updateDocumentById)
.delete(categoryService.delDocumentById)

module.exports= categoryRoute