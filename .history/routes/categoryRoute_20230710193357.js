const { Router } =require("express");

const categoryService = require("../services/categoryService");

const categoryRoute = Router()
const mide = (req, res , next) => {
console.log(req, res, nex)
}
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