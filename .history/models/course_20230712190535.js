const {Schema, model} = require('mongoose');

const courseSchema = new Schema({
    name:{
        type:"String",
        required:true,
        unique:true
    },
    class:{
        type:"String",
        required:true
    },
    instructor:
    image:String,

    totalStudent:Number



    //content: {type:Schema.Types.ObjectId, ref:'content'}
})


