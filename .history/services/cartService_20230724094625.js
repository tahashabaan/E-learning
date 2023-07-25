const asyncHandler = require('express-async-handler');

const Cart = require('../models/cart')
const Course = require('../models/course');



exports.addCourseToCart = 
asyncHandler(async (req, res, next) => {
// find courseById
const {courseId} = req.body
const course = await Course.findById(courseId);

    await Cart.create({
      $add
    })
})