const crypto = require("crypto");

const jwt = require("jsonwebtoken");
const asyncHandler = require("express-async-handler");
const bcrypt = require("bcryptjs");

const sendEmail = require("../utils/sendEmail");
const User = require("../models/user");
const ErrorHandle = require("../utils/errorHandle");

const token = crypto.randomBytes(64).toString("hex");

exports.signUp = asyncHandler(async (req, res, next) => {
  const { email, name, password } = req.body;
  await User.create({ email, name, password });
  res.status(202).json({ message: "sucessfuly signUp..." });
});

exports.signIn = asyncHandler(async (req, res, next) => {
  const { email, password } = req.body;
  const user = await User.find({ email });
  if (!user || !bcrypt.compare(password, user.password))
    return next(
      new ErrorHandle({
        message: "email or password not correct...",
        statusCode: 422,
      })
    );
  const token = jwt.sign(
    {
      userId: user._id,
      role: user.role,
    },
    process.env.SECRET_TOKRN
  );
  req.cookies("token", token);
  res.status(202).json({ message: "sucessfuly signIn...", token });
});

exports.forgetPassword = asyncHandler(async (req, res, next) => {
  const { email } = req.body;
  const user = await User.findOne({ email });
  if (!user)
    return next(
      new ErrorHandle({
        message: "eamil not found check it...",
        statusCode: 403,
      })
    );

  // random 6 digit number then send to mail it
  // 100000 + Math.random() * 900000)
  const randomNum = Math.ceil(100000 + Math.random() * 900000);
  await User.findByIdAndUpdate(user._id, { passwordResetCode: randomNum });

  sendEmail(
    user.email,
    "resetPassword",
    `the code of reset password ${randomNum}`
  );
   next();
});

const verfiyResetPassword = asyncHandler(async (req, res, next) => {
  const { passwordResetCode } = req.body;
  const user = await User.findOne({ passwordResetCode });
  if (!(user.passwordResetCode === passwordResetCode))
    return next(
      new ErrorHandle({
        message: "resetCode not matched... enter code correct",
        statusCode:402
      })
    );

    res.status(202).json({message:'resetCode is matched'})

    next();
});

const ResetPassword = asyncHandler(async (req, res, next) => {
  const { password, confirmPassword } = req.body;
  if (!(password === confirmPassword))
  return next(
    new ErrorHandle({
      message: "password and confirmPassword not matched..",
      statusCode:402
    })
    );
    const user = await User.findOne({});
    user.password= await bcrypt.hash(password);
    await user.save();
    res.status(202).json({message:'us is matched'})
    next();
});