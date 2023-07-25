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
.get(cart.getCodes)
.post(generatecartCode, cart.createCode)

router
.route('/:id')
.get(cart.getCodeById)
.put(generateCode,cart.updateCodeById)
.delete(cart.delCodeById)

module.exports= router