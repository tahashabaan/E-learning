const {Schema, model}= require('mongoose');

const cartSchema = Schema({
  course:{
     type:Schema.types
  }
})

module.exports = model('cart', cartSchema);