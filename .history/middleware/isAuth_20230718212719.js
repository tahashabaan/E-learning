const jwt = require('jsonwebtoken');
const asyncHandler = require('express-async-handler');


module.exports =  asyncHandler(async (req, res, next) => {
    const {email, password} = req.body;
    const user = await User.find({email});
    if(!user) 
      return next({message:' signUp first then login...', statusCode:422});
     const token = jwt.sign({
      userId:user._id,
      role:user.role
 }, process.env.SECRET_TOKRN);
     req.cookies('token', token);
     res.status(202).json({message:'sucessfuly signIn...', token})
})