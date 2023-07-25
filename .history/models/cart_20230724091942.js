const {Schema, model}= require('mongoose');

const cartSchema = Schema({
  course:{
     type:Schema.Types.ObjectId,
     ref:'courses',
     required:true
  },
  totalPrice:Number,
  totla
})

module.exports = model('cart', cartSchema);