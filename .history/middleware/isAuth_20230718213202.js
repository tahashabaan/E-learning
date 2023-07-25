const jwt = require('jsonwebtoken');
const asyncHandler = require('express-async-handler');

const ErrorHandle = require('../utils/errorHandle');

module.exports =  asyncHandler(async (req, res, next) => {
     const auth =  req.get('Authorization');
     if (!auth) return next(new ErrorHandle({message:'you should logged in ...', statusCode:422}));
    const token = auth.split('/')[1];
    const decodedToken = await jwt.verify(token, 'mySecretKey123');
    if(!decodedToken) next(new ErrorHandle({message:'you should logged in ...', statusCode:422}));
    req.userId = decodedToken.userId;
})