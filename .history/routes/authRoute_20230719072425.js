const {Router} = require('express');

const authService = require('../services/auth');


console.log(authService);
const {signUpValidated, signInValidated} = require('../utils/validated/auth');


const router = Router();


router.post('/signUp', aut)
  
// router.post('/signIn', signInValidated, authService.signIn);



module.exports = router;