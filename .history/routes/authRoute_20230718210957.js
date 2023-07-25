const {Router} = require('express');

const userService = require('../services/userservice');



const {singUp} = require('../utils/validated/auth');


const router = Router();

router.put('/changePassword/:id', changePasswordValidetor,userService.changePassword);

router
.post('/signUp',createUserValidated,
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