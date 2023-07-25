const {Schema, model} = require('mongoose');

const courseSchema = new Schema({
    name:{
        type:"String",
        required:true,
        unique:true
    },

    numStudent:Number



    //content: {type:Schema.Types.ObjectId, ref:'content'}
})


