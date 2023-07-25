const asyncHandler = require('express-async-handler');

const Cart = require('../models/cart')
const Course = require('../models/course');



exports.addCourseToCart = 
asyncHandler(async (req, res, next) => {
// find courseById
const {courseId} = req.body
const course = await Course.findById(courseId);
const cart = await Cart.findOne({user:req.userId});

if(cart.items.length === 0){
  const newCart = new Cart({
    $addToSet:{items:course},
    totalPrice:course.price,
  })
  newCart.save();
  return;
}
cart.items.addToSet(course);
totalPrice:course.price,


})