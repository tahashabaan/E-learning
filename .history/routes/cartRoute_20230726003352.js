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
.get(cartService.getCartByUser)
.post(cartService.addCourseToCart)

router
.route('/:cartId')
.delete(cartService.removeCart)

module.exports= router