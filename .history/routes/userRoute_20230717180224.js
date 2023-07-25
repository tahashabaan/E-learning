const {Router} = require('express');

const userService = require('../services/userservice');



const {createUserValidatedValidated, 
       Validated, 
       Validated, 
       Validated} = require('../utils/validated/user');

const router = Router();

router
.route('/')
.get(userService.getUsers)
.post(userService.uploadMiddleware, 
      userService.addUser)

router
.route('/:userId')
.get(userService.getUserById)
.put(userService.uploadMiddleware,
    userService.updateUserById)
.delete(userService.delUserById)

module.exports =  router;





