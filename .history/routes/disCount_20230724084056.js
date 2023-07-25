const { Router } =require("express");

const {isAuth, allowTo} = require('../middleware/isAuth');
const discountService = require("../services/disCount");

cons
// const {postCategoryValidated, 
//        getCategoryValidetor, 
//        updateCategoryValidetor, 
//        delCategoryValidetor} = require('../utils/validated/category');

const router = Router();


router
.route('/')
.get(discountService.getCodes)
.post(isAuth, discountService.createCode)

router
.route('/:id')
.get(discountService.getCodeById)
.put(discountService.updateCodeById)
.delete(discountService.delCodeById)

module.exports= router