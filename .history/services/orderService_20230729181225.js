const asyncHandler = require('exress-async-handler');

const Order = require('../models/order')
const Cart = require('../models/cart');



exports.createOrder = asyncHandler(async(req, res, next) => {
    const {country, paymentMethod} = req.body;
    const order = await Order.findOne({user:req.userId});
    const cart = await Cart.findOne({user:req.userId});

    const totalPrice = cart.totlalPriceAfterDisCount?cart.totlalPriceAfterDisCount:cart.totalPrice;

        await Order.create({
            country,
            user:req.userId,
            paymentMethod,
            items:cart.items,
            totalPrice
        })
    
        //clear cart this user
        await Cart.deleteOne({userId:req.userId})
})


exports.getOrderLoggedUser = asyncHandler(async(req, res, next) => {
    const order = await Order.findOne({user:req.userId});
    res.status(202).json({message:'order this user', order})
})

exports.getOrders = asyncHandler(async(req, res, next) => {
    const order = await Order.find();
    res.status(202).json({message:'orders ', order})
})


exports.statusOrder = asyncHandler(async(req, res, next) => {
    const order = await Order.findOne({user:req.userId});
    order.isPaid = req.body.isPaid; 
    order.paidAt = Date.now();
    await order.save()
})
