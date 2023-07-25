const {Router} = require('express');

const userService = require('../services/userservice');



// const {Validated, 
//        Validated, 
//        Validated, 
//        Validated} = require('../utils/validated/user');

const router = Router();

router
.route('/')
.get(userService.getUsers)
.post(userService.uploadMiddleware, 
    (req, res, next) => console.log(req.file),
    userService.addUser)

router
.route('/:userId')
.get(userService.getUserById)
.put(userService.uploadMiddleware,
    userService.updateUserById)
.delete(userService.delUserById)

module.exports =  router;





