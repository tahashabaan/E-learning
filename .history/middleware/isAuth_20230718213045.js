const jwt = require('jsonwebtoken');
const asyncHandler = require('express-async-handler');

const ErrorHandle = require('../utils/errorHandle');

module.exports =  asyncHandler(async (req, res, next) => {
     const auth =  req.get('Authorization');
     if (!auth) return next(new ErrorHandle({message:'you should logged in ...'}))
})