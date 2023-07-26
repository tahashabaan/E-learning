const asyncHandler = require("express-async-handler");

const Cart = require("../models/cart");
const Course = require("../models/course");
const Discount = require("../models/disCount");
const ErrorHandle = require("../utils/errorHandle");

exports.addCourseToCart = asyncHandler(async (req, res, next) => {
  const { courseId } = req.body;
  const course = await Course.findById(courseId);
  const cart = await Cart.findOne({ userId: req.userId });

  let totalPrice;
  if (!cart) {
    totalPrice = course.price;
    await Cart.create({
      $addToSet: { "items.course": course, "items.price": course.price },
      totalPrice,
      userId: req.userId,
    });

    return;
  }

  totalPrice = cart.price * cart.items.length;

  const item = {
    course,
    price: course.price,
  };

  cart.items.addToSet(item);
  cart.totalPrice = totalPrice;
  cart.userId = req.userId;

  await cart.save();
});

exports.getCarts = asyncHandler(async (req, res, next) => {
  const cart = await Cart.find();
  res.status(200).json({ message: "cart of User..", cart });
});

exports.getCartByUser = asyncHandler(async (req, res, next) => {
  const cart = await Cart.findOne({ userId: req.userId });
  res.status(200).json({ message: "cart of User..", cart });
});

exports.removeCart = asyncHandler(async (req, res, next) => {
  const cart = await Cart.findOne({ userId: req.userId });
  const itemIndex = cart.items.findIndex(
    (item) => item._id === req.params.cartId
    );
    cart.items.slice(itemIndex, 1);
    const totalPrice = cart.price * cart.items.length;
    cart.totalPrice = totalPrice;
  await cart.save();
});

exports.clearCart = asyncHandler(async (req, res, next) => {
  const cart = await Cart.findOne({ userId: req.userId });
  await cart.remove();
  res.status(200).json({ message: "cart of User..", cart });
});

exports.applyDisCount = asyncHandler(async (req, res, next) => {
  const { discount } = req.body; // code from user
  const disCount = await Discount.findOne({
    code: discount,
    expireDate: { $gt: Date.now() },
  });
  const cart = await Cart.findOne({ userId: req.userId });

  if (!disCount)
    return next(
      new ErrorHandle({
        message: "the code not valid or expires",
        statsCode: 422,
      })
    );

  cart.totlalPriceAfterDisCount =
  cart.totalPrice - (cart.totalPrice * disCount.amount) / 100;
  await cart.save();
});
