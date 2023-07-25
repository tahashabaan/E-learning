const { Router } =require("express");

const categoryService = require("../services/categoryService");

const {} = require('../utils/')
const categoryRoute = Router();



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