const crypto=  require('crypto');

const asyncHandler = require('express-async-handler');

const User = require('../models/user');

const token=crypto.randomBytes(64).toString('hex');


exports.signUp = asyncHandler(async (req, res, next) => {
    const {email} = req.body;
    const user = await User.find({email})
})
