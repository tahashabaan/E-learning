const asyncHandler = require('express-async-handler');

const Cart = require('../models/cart')
const Course = require('../models/course');



exports.addCourseToCart = 
asyncHandler(async (req, res, next) => {
// find courseById
const {courseId, discount} = req.body
const course = await Course.findById(courseId);
const cart = await Cart.findOne({userId:req.userId});

if(!cart){
  await Cart.create({
   items:{$addToSet},
    totalPrice:course.price,
    userId:req.userId
  })
  return;
}
cart.items.addToSet(course);
cart.totalPrice=course.price;


})