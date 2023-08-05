const stripe = require('stripe')(process.env.STRIPE_KEY)
const asyncHandler = require('express-async-handler');

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

exports.checkoutSession = asyncHandler(async(req, res, next) => {
    const cart = await Cart.findOne({user:req.userId});

    const totalPrice = cart.totlalPriceAfterDisCount?cart.totlalPriceAfterDisCount:cart.totalPrice;

    const session = await stripe.checkout.sessions.create({
        line_items: [
          {
            name:req.user.name,
            currency:'egp',
            quantity: 1,
            amount:100 *100
          }
        ],
        mode: 'payment',
        success_url: `[${req.protocol()}://${req.get('host')}/myLearning]`,
        cancel_url: `[${req.protocol()}://${req.get('host')}/order]`,
        client_reference_id:car
      });
   })



