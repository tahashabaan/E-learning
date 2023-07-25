const {Router} = require('express');

const authService = require('../services/a');



const {signUpValidated} = require('../utils/validated/auth');


const router = Router();


router.post('/signUp',signUpValidated, authService.s)
      


module.exports =  router;