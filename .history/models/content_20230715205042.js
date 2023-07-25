const { Schema, model } =require ("mongoose"); 

const contentSchema = new Schema({
  title:{
    type:'String',
    required:true
  },
  lecutre:{[
   // video, pdf, title 

  ]}
})
