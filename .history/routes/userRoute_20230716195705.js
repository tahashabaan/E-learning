const {Router} = require('express');

const {addUser, 
       getUsers,
       getUserById,
       updateUserById, 
       delUserById} = require("../services/userservice");

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





