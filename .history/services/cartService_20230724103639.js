const asyncHandler = require("express-async-handler");

const Cart = require("../models/cart");
const Course = require("../models/course");

exports.addCourseToCart = asyncHandler(async (req, res, next) => {
  // find courseById
  const { courseId, discount } = req.body;
  const course = await Course.findById(courseId);
  const cart = await Cart.findOne({ userId: req.userId });
  const totalPrice=course.price * cart.items.length;
  if (!cart) {
    await Cart.create({
      $addToSet: { items: course },
      totalPrice,
      userId:req.userId
    });
    return;
  }
  cart.items.addToSet(course);
  cart.totalPrice =totalPrice;
  cart.userId =req.userId;
  await cart.save()
});


exports.addCourseToCart = asyncHandler(async (req, res, next) => {
    await Cart.find({userId:req.userId})
});