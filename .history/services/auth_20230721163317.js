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
  const randomNum = Math.ceil(100000 + Math.random() * 900000).toString();
  req.email = email;
  const hashedRandomNum = crypto
    .createHash("md5")
    .update(randomNum)
    .digest("hex");
  user.passwordResetCode = hashedRandomNum;
  user.passwordResetExpires = Date.now() + 14 * 60 * 1000;
  user.passwordResetVerified = false;

  try {
    sendEmail(
      user.email,
      "resetPassword",
      `the code of reset password ${hashedRandomNum}`
    );
  } catch (err) {
    user.passwordResetCode = undefined;
    user.passwordResetExpires = undefined;
    user.passwordResetVerified = undefined;
    nexr(
      new ErrorHandle({
        message: "error in send email",
        statusCode: 500,
      })
    );
  }

  await user.save();

  next();
});

const verfiyResetPassword = asyncHandler(async (req, res, next) => {
  let { passwordResetCode } = req.body;
  passwordResetCode = crypto.createHash("md5").update(randomNum).digest("hex");
  const user = await User.findOne({
    passwordResetCode,
    passwordResetExpires: { $gt: Date.now() },
  });
  if (!user)
    return next(
      new ErrorHandle({
        message: "resetCode not matched or not valid... enter code correct",
        statusCode: 402,
      })
    );

   user.passwordResetVerified = true;
   await user.save()
  res.status(202).json({ message: "resetCode is matched" });

  next();
});

const ResetPassword = asyncHandler(async (req, res, next) => {
  const { password, confirmPassword } = req.body;
  if (!(password === confirmPassword))
    return next(
      new ErrorHandle({
        message: "password and confirmPassword not matched..",
        statusCode: 402,
      })
    );
  const user = await User.findOne({email:req.email });
  if(!user)
  return next(
    new ErrorHandle({
      message: "user not exicted..",
      statusCode: 402,
    })
  );
  if(!user.passwordResetVerified) 
  return next(
    new ErrorHandle({
      message: "user not Verified..",
      statusCode: 402,
    })
  );
  user.password = await bcrypt.hash(password, 12);
  await user.save();
  res.status(202).json({ message: "user created password... sucessfuly" });
  next();
});
