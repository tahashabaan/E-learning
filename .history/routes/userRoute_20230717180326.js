const {Router} = require('express');

const userService = require('../services/userservice');



const {createUserValidated, 
       getUserValidetor, 
       updateUserValidetor, 
       delUserValidetor} = require('../utils/validated/user');

const router = Router();

router
.route('/')
.get(userService.getUsers)
.post(createUserValidated,
      userService.uploadMiddleware, 
      userService.addUser)

router
.route('/:userId')
.get(getUuserService.getUserById)
.put(userService.uploadMiddleware,
    userService.updateUserById)
.delete(userService.delUserById)

module.exports =  router;




