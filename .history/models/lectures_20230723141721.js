const { Schema, model } =require ("mongoose"); 

const lectureSchema = new Schema({
  title:{
    type:'String',
    required:true
  },
  lecutreId:{
    type:'String',
    required:true
  },
  lecutrePdf:{
    type:'String',
    required:true
  },

  course:{
    type:Schema.Types.ObjectId,
    ref:'courses',
    required:true
  }

})

module.exports = model('lectures', lectureSchema);
