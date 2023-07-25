const { Router } =require("express");

const categoryService = require("../services/categoryService");

console.log(categoryService)
const categoryRoute = Router()

categoryRoute
.route('category')
.get(categoryService)
.post()

categoryRoute
.route('category/:categoryId')
.get()
.put()
.delete()

module.exports= categoryRoute