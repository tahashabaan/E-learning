const { Router } =require("express");

const {isAuth, allowTo} = require('../middleware/isAuth');
const orderService = require("../services/orderService");

// const {postCategoryValidated, 
//        getCategoryValidetor, 
//        updateCategoryValidetor, 
//        delCategoryValidetor} = require('../utils/validated/category');

const router = Router();

router.use(isAuth, allowTo('manger', 'user'))

router.get('/carcheckout/')
router
.route('/')
.get(orderService.getOrders)
.post(orderService.createOrder)
// .delete(orderService)

// router
// .route('/:cartId')
// .delete(cartService.removeCart)

module.exports= router