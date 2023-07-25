const { Router } =require("express");

const generateCode = require('../utils/generateCode')
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
.post(isAuth,generateCode, discountService.createCode)

router
.route('/:id')
.get(discountService.getCodeById)
.put(generateCodediscountService.updateCodeById)
.delete(discountService.delCodeById)

module.exports= router