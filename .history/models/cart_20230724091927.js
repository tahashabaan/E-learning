const {Schema, model}= require('mongoose');

const cartSchema = Schema({
  course:{
     type:Schema.Types.ObjectId,
     ref:'courses',
     required:true
  },
  tota
})

module.exports = model('cart', cartSchema);