const {Schema, model} = require('mongoose');

const courseSchema = new Schema({
    name:{
        type:"String",
        required:true,
        unique:true
    },
    description:{
        type:"String",
        required:true
    },
    class:{
        type:"String",
        required:true
    },Nu
    rating:Number,
    avgRating:Number,
    
    image:String,
    totalStudent:Number,
    
//     instructor:{
//       type:Schema.Types.ObjectId,
//       ref:'teacher',
//       required:true
//   },
    // content: {
    //     type:Schema.Types.ObjectId,
    //      ref:'content'}
}, {timestamps})

module.exports = model('courses', courseSchema)


