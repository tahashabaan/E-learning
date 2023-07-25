const { Schema, model } =require ("mongoose"); 

const contentSchema = new Schema({
  title:{
    type:'String',
    required:true
  },
  lecutreVideo:{
    type:'String',
    required:true
  },
  lecutrePdf:{
    type:'String',
    required:true
  },

})

module.exports = model('content', contentSchema);
