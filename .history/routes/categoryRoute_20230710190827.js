consr { Router } from "express";

import categoryService from "../services/categoryService";

// console.log(categoryService)
const categoryRoute = Router()

categoryRoute
.route('category')
.get()
.post()

categoryRoute
.route('category/:categoryId')
.get()
.put()
.delete()

export default categoryRoute