const {Router} = require('express');

const userService = require('../services/userservice');



// const {Validated, 
//        Validated, 
//        Validated, 
//        Validated} = require('../utils/validated/user');

const router = Router();

router
.route('/')
.get(userServicegetUsers)
.post(userServiceaddUser)

router
.route('/:userId')
.get(userServicegetUserById)
.put(userServiceupdateUserById)
.delete(userServicedelUserById)

module.exports =  router;





