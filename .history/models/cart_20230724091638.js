const {Schema, model}= require('mongoose');

const cartSchema = Schema({
  course:{
     type:Schema
  }
})

module.exports = model('cart', cartSchema);