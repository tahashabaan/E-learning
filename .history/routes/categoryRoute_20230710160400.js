import { Router } from "express";

import ca


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