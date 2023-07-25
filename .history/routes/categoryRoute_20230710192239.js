const { Router } =require("express");

const categoryService = require("../services/categoryService");

console.log(categoryService)
const categoryRoute = Router()

categoryRoute
.route('/')
.get(categoryService.getDocuments)
.post(categoryService.insertDocument)

categoryRoute
.route('category/:categoryId')
.get(categoryService.getDocumentById)
.put(categoryService.updateDocumentById)
.delete(categoryService.delDocumentById)

module.exports= categoryRoute