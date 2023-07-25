const {Router} = require('express');

const userService = require('../')

// const {Validated, 
//        Validated, 
//        Validated, 
//        Validated} = require('../utils/validated/user');

const router = Router();

router
.route('/')
.get(getUsers)
.post(addUser)

router
.route('/:userId')
.get(getUserById)
.put(updateUserById)
.delete(delUserById)

module.exports =  router;





