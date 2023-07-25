const {Schema, model} = require('mongoose');

const courseSchema = new Schema({
    name:{
        type:"String",
        required:true,
        unique:true
    },
    class ClassName extends ParentClass {
        super()
    }:{
        type:"String",
        required:true
    },
    image:String,

    totalStudent:Number



    //content: {type:Schema.Types.ObjectId, ref:'content'}
})


