const { Router } =require("express");

const categoryService = require("../services/categoryService");

console.log(categoryService)
const categoryRoute = Router()

categoryRoute
.route('category')
.get(categoryService.getDocuments)
.post(categoryService.getDocuments)

categoryRoute
.route('category/:categoryId')
.get()
.put()
.delete()

module.exports= categoryRoute