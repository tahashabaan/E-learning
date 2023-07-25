import { Router } from "express";

import Category from "../services/categoryService";
import { Category } from './../.history/services/categoryService_20230710155135';


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