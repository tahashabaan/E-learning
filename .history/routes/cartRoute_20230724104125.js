const { Router } =require("express");

const {isAuth, allowTo} = require('../middleware/isAuth');
const cartService = require("../services/cartService");

// const {postCategoryValidated, 
//        getCategoryValidetor, 
//        updateCategoryValidetor, 
//        delCategoryValidetor} = require('../utils/validated/category');

const router = Router();

router.use(isAuth, allowTo('manger', 'admin'))

router
.route('/')
.get(discountService.getCodes)
.post(generateCode, discountService.createCode)

router
.route('/:id')
.get(discountService.getCodeById)
.put(generateCode,discountService.updateCodeById)
.delete(discountService.delCodeById)

module.exports= router