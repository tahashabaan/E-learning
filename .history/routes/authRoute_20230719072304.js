const {Router} = require('express');

const authService = require('../services/auth');



const {signUpValidated, signInValidated} = require('../utils/validated/auth');


const router = Router();


rou
  
// router.post('/signIn', signInValidated, authService.signIn);



module.exports = router;