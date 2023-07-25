const asyncHandler = require('express-async-handler');

const Cart = require('../models/cart')
const Course = require('../models/course');



exports.addCourseToCart = 
asyncHandler(async (req, res, next) => {
// find courseById
const courseId = req.bod
const course = await Course.findById()
    // await Cart.create({

    // })
})