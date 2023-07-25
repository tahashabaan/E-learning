const { Schema, model } =require ("mongoose"); 

const contentSchema = new Schema({
  title:{
    type:'String',
    required:true
  },
  lecutreUrl:{
    type:'String',
    required:true
  },
  lecutrePdf:{
    type:'String',
    required:true
  },

})

module.exports = model('lectures', lecturesSchema);
