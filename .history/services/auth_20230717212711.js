const crypto=  require('crypto');

const asyncHandler = require('express-async-handler');

const User = require('../models/user');

const token=crypto.randomBytes(64).toString('hex');


exports.signUp = asyncHandler(async (req, res, next) => {
    const {email} = req.body;
    const user = await User.find({email});

    if(user) 
      return next({message:'user signUp alreedy', statusCode:422});

     await User.create(req.body);

     res.status(402).json({message})
})
