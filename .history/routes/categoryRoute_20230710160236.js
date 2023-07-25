import { Router } from "express";

const router = Router()

router
.route('category')
.get()
.post()


router
.route('category/:categoryId')
.get()
.post()

export default router