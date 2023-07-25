import { Router } from "express";

import categoryService from "../services/categoryService";

console.log(categoryService)
const router = Router()

router
.route('category')
.get()
.post()

router
.route('category/:categoryId')
.get()
.put()

.delete()
const categoryRoute= router;

export default categoryRoute 
