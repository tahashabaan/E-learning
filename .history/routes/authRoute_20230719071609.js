const {Router} = require('express');

const authService = require('../services/auth');



const {signUpValidatedm} = require('../utils/validated/auth');


const router = Router();


router.post('/signUp', signUpValidated, authService.signUp);
  
router.post('/signIn', signInValidated, authService.signIn);



module.exports =  router;