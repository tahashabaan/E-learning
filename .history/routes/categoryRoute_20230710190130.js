import { Router } from "express";

import categoryService from "../services/categoryService";

// console.log(categoryService)
const categoryRouter = Router()

router
.route('category')
.get()
.post()

router
.route('category/:categoryId')
.get()
.put()
.delete()

module.exports = router;