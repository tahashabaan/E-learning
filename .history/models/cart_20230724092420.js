const {Schema, model}= require('mongoose');

const cartSchema = Schema({
  items:[{
     type:Schema.Types.ObjectId,
     ref:'courses',
     required:true
  }],
  totalPrice:Number,
  totlalPriceAfterDisCount:Number,
  disCount:{
    
  }
})

module.exports = model('cart', cartSchema);