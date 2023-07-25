const {Router} = require('express');

const {addUser, } = require("../services/userservice");

const {createSubCategoryValidated, 
       getSubCategoryValidated, 
       updateSubCategoryValidated, 
       delSubCategoryValidated} = require('../utils/validated/subCategory');

const router = Router()


