const { Schema, model } =require ("mongoose"); 

const lectureSchema = new Schema({
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

  course:{
    type:Schema.Tu
  }

})

module.exports = model('lectures', lectureSchema);
