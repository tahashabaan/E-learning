const {Router} = require('express');

const authService = require('../services/auth');


console.log(signUpValidated);
const {signUpValidated, signInValidated} = require('../utils/validated/auth');


const router = Router();


router.post('/signUp',  authService.signUp)
router.post('/signIn',  authService.signIn)


  
// router.post('/signIn', signInValidated, authService.signIn);



module.exports = router;