const asyncHandler = require("express-async-handler");

const Cart = require("../models/cart");
const Course = require("../models/course");

const course = await Course.findById(courseId);


exports.addCourseToCart = asyncHandler(async (req, res, next) => {
 const cart = await Cart.findOne({ userId: req.userId });
 const totalPrice=course.price * cart.items.length;
  const { courseId, discount } = req.body;
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


exports.getUserCart = asyncHandler(async (req, res, next) => {
   const cart = await Cart.find({userId:req.userId});
   res.status(200).json({message:'cart of User..', cart});
});

exports.removeCart = asyncHandler(async (req, res, next) => {
    const cart = await Cart.findOne({userId: req.userId});
    const itemIndex = cart.items.findIndex(item => item._id === req.params.cartId)
    cart.items.slice(itemIndex, 1);
    cart.totalPrice
    await cart.save();
   
 });

 exports.clearCart =asyncHandler(async (req, res, next) => {
    const cart = await Cart.findOne({userId:req.userId});
    await cart.remove()
    res.status(200).json({message:'cart of User..', cart});
 });
 