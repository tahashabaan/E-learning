const {Router} = require('express');

const authService = require('../services/auth');

const {signUpValidated, signInValidated} = require('../utils/validated/auth');



const router = Router();


router.post('/signUp', signUpValidated, authService.signUp)
router.post('/signIn', signInValidated, authService.signIn)

router.post('/forgotPassword', authService.forgetPassword)

router.post('/verfiyResetPassword', authService.verfiyResetPassword)

  
// router.post('/signIn', signInValidated, authService.signIn);



module.exports = router;