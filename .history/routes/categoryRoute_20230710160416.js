import { Router } from "express";

import CategoryService from "../services/categoryService";


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

export default router