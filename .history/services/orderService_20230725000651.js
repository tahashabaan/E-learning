

const Order = require('../models/ordder');

exports.createOrder = asyncHandler(async(req, res, next) => {})
exports.getOrder = asyncHandler(async(req, res, next) => {
    const order = await Order.findOne({user:req.userId});

    res.status(202).json({message:'order tis user', order})
})
