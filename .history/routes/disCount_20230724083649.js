const { Router } =require("express");

const {isAuth, allowTo} = require('../middleware/isAuth');
const discountService = require("../services/disCount");

// const {postCategoryValidated, 
//        getCategoryValidetor, 
//        updateCategoryValidetor, 
//        delCategoryValidetor} = require('../utils/validated/category');

const router = Router();


router
.route('/')
.get(discountService.getCodes)
.post(isAuth,discountService.createCode)

router
.route('/:id')
.get(discountServices.getCodeById)
.put(discountSe.updateCategoryById)
.delete(delCategoryValidetor,
        categoryService.delCategoryById)

module.exports= router