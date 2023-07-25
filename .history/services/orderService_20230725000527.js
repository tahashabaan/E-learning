

const Order = require('../models/ordder');

exports.getOrder = asyncHandler(async(req, res, next) => {
    const order = await Order.findOne({user:req.userId});
    
})
