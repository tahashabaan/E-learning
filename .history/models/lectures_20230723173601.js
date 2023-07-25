const { Schema, model } =require ("mongoose"); 

const lectureSchema = new Schema({
  title:{
    type:'String',
    required:true
  },
  description:{
    type:'String',
    required:true
  },
  videoId:{
    type:'String',
    required:true
  },
  thumbail:{
    type:'String',
    required:true
  },
  
  course:{
    type:Schema.Types.ObjectId,
    ref:'courses',
    required:true
    // lecutrePdf:{
    //   type:'String',
    //   required:true
    // },
  }

})

module.exports = model('lectures', lectureSchema);
