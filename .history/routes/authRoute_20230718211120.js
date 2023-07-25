const {Router} = require('express');

const aService = require('../services/userservice');



const {signUpValidated} = require('../utils/validated/auth');


const router = Router();


router.post('/signUp',signUpValidated, userService.addUser)
      


module.exports =  router;