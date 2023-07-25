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
.get(ca.getCodes)
.post(generatecaCode, ca.createCode)

router
.route('/:id')
.get(ca.getCodeById)
.put(generateCode,ca.updateCodeById)
.delete(ca.delCodeById)

module.exports= router