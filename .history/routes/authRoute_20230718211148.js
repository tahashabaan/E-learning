const {Router} = require('express');

const authService = require('../services/userservice');



const {signUpValidated} = require('../utils/validated/auth');


const router = Router();


router.post('/signUp',signUpValidated, authService.)
      


module.exports =  router;