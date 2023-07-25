const jwt = require("jsonwebtoken");
const asyncHandler = require("express-async-handler");

const User = require("../models/user");
const ErrorHandle = require("../utils/errorHandle");

exports.isAuth =asyncHandler(async (req, res, next) => {
  const auth = req.get("Authorization");
  if (!auth)
    return next(
      new ErrorHandle({ message: "you should logged in ...", statusCode: 422 })
    );
  const token = auth.split("/")[1];
  const decodedToken = await jwt.verify(token, process.env.SECRET_TOKRN);
  if (!decodedToken)
    return next(
      new ErrorHandle({
        message: "Invalid Token please LogIn...",
        statusCode: 422,
      })
     
    );
  req.userId = decodedToken.userId;
  req.role = decodedToken.role;
  // decodedToken
  const user = await User.findById(req.userId);
  if (!user)
    return next(
      new ErrorHandle({
        message: "user Invalid please LogIn...",
        statusCode: 422,
      })
    );
  // 
  const timeStand = parseInt(user.passwordChangedAt.getTime()/1000)
  if (decodedToken.iat <timeStand ) 
     next( new ErrorHandle({
    message: "token Invalid please LogIn...",
    statusCode: 422,
  }))

  next();
});

exports.allowTo = (...roles) => 
asyncHandler(async (req, res, next) => {
  
});