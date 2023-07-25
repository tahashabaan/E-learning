const {Router} = require('express');

const authService = require('../services/auth');

const {signUpValidated, signInValidated} = require('../u');

console.log(signUpValidated, signInValidated);


const router = Router();


router.post('/signUp',  authService.signUp)
router.post('/signIn',  authService.signIn)


  
// router.post('/signIn', signInValidated, authService.signIn);



module.exports = router;