const jwt = require('jsonwebtoken');
const asyncHandler = require('express-async-handler');


module.exports =  asyncHandler(async (req, res, next) => {
     const auth =  req.get('Authorization');
     if ()
})