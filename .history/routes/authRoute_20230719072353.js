const {Router} = require('express');

const authService = require('../services/auth');


console.log()
const {signUpValidated, signInValidated} = require('../utils/validated/auth');


const router = Router();


router.post('/signUp')
  
// router.post('/signIn', signInValidated, authService.signIn);



module.exports = router;