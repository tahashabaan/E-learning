const {Router} = require('express');

const authService = require('../services/auth');



const {signUpValidated} = require('../utils/validated/auth');


const router = Router();


router.post('/signUp',signUpValidated, authService.signIn)
      


module.exports =  router;