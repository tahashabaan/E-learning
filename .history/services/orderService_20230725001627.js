

const { configs } = require('eslint-plugin-prettier');
const Order = require('../models/ordder');
const Cart = require('../models/ordder');


exports.createOrder = asyncHandler(async(req, res, next) => {
    const {country} = req.body;
    const order = await Order.findOne({user:req.userId});
    const cart = await Cart.findOne({user:req.userId});


    if(!order){
        await Order.create({
            country,
            user:req.userId,
            //paymentMethod


        })
    }
})


exports.getOrder = asyncHandler(async(req, res, next) => {
    const order = await Order.findOne({user:req.userId});

    res.status(202).json({message:'order tis user', order})
})
