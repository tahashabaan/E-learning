const {Schema, model}= require('mongoose');

const cartSchema = Schema({
  course:{
     type:Schema.Types.ObjectId,
     
  }
})

module.exports = model('cart', cartSchema);