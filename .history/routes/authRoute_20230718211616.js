const {Router} = require('express');

const authService = require('../services/auth');



const {signUpValidated} = require('../utils/validated/auth');


const router = Router();


router.('/signUp', signUpValidated, authService.signUp);
  
router.post('/signIn', signInValidated, authService.signIn);



module.exports =  router;