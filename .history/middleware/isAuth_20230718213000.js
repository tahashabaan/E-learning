const jwt = require('jsonwebtoken');
const asyncHandler = require('express-async-handler');

const ErrorHandle = require('../utils//validetorMddleware')

module.exports =  asyncHandler(async (req, res, next) => {
     const auth =  req.get('Authorization');
     if (!auth) return next(new ErrorHandle({message:}))
})