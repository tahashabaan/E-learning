const {Router} = require('express');

const userService = require('../services/userservice');



const {signUpValidated} = require('../utils/validated/auth');


const router = Router();


.post('/signUp',signUpValidated,
      userService.uploadMiddleware, 
      userService.addUser)
      
router
.route('/:id')
.get(getUserValidetor,
     userService.getUserById)
.put(updateUserValidetor,
     userService.uploadMiddleware,
     userService.updateUserById)
.delete(delUserValidetor,
        userService.delUserById)

module.exports =  router;