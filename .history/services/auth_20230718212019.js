const crypto=  require('crypto');

const 
const asyncHandler = require('express-async-handler');

const User = require('../models/user');

const token=crypto.randomBytes(64).toString('hex');


exports.signUp = asyncHandler(async (req, res, next) => {
    const {email, name, password} = req.body;
    await User.create({email, name, password});
     res.status(202).json({message:'sucessfuly signUp...', })
})


exports.signIn = asyncHandler(async (req, res, next) => {
    const {email, password} = req.body;
    const user = await User.find({email});
    if(!user) 
      return next({message:' signUp first then login...', statusCode:422});
    
     res.status(402).json({message:'sucessfuly signUp...', })
})
