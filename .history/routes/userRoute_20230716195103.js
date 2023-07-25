const {Router} = require('express');

const {ad} = require("../services/userSe");

const {createSubCategoryValidated, 
       getSubCategoryValidated, 
       updateSubCategoryValidated, 
       delSubCategoryValidated} = require('../utils/validated/subCategory');

const router = Router()


