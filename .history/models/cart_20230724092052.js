const {Schema, model}= require('mongoose');

const cartSchema = Schema({
  icourse:{
     type:Schema.Types.ObjectId,
     ref:'courses',
     required:true
  },
  totalPrice:Number,
  totlalPriceAfterDisCount:Number
})

module.exports = model('cart', cartSchema);