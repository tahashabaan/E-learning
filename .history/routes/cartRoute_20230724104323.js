const { Router } =require("express");

const {isAuth, allowTo} = require('../middleware/isAuth');
const cartService = require("../services/cartService");

// const {postCategoryValidated, 
//        getCategoryValidetor, 
//        updateCategoryValidetor, 
//        delCategoryValidetor} = require('../utils/validated/category');

const router = Router();

router.use(isAuth, allowTo('manger', 'user'))

router
.route('/')
.get(cartService.getCodes)
.post(cartService.addCourseToCart)

router
.route('/:id')
.get(cartService.getCodeById)
.put(cartService.updateCodeById)
.delete(cartService.delCodeById)

module.exports= router