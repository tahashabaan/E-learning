const crypto = require("crypto");

const jwt = require("jsonwebtoken");
const asyncHandler = require("express-async-handler");

const User = require("../models/user");

const token = crypto.randomBytes(64).toString("hex");

exports.signUp = asyncHandler(async (req, res, next) => {
  const { email, name, password } = req.body;
  await User.create({ email, name, password });
  res.status(202).json({ message: "sucessfuly signUp..." });
});

exports.signIn = asyncHandler(async (req, res, next) => {
  const { email, password } = req.body;
  const user = await User.find({ email });
  if (!user || bcrypt.compare())
    return next({ message: " signUp first then login...", statusCode: 422 });
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
