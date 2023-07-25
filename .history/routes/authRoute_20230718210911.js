const {Router} = require('express');

const userService = require('../services/userservice');



const {createUserValidated, 
       getUserValidetor, 
       updateUserValidetor, 
       delUserValidetor,
       changePasswordValidetor} = require('../utils/validated/user');

const router = Router();

router.put('/changePassword/:id', changePasswordValidetor,userService.changePassword);

router
.post(createUserValidated,
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