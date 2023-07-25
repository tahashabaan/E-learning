const {Schema, model} = require('mongoose');

const courseSchema = new Schema({
    title:{
        type:"String",
        required:true,
        trim:true
    },
    slug:{
        type:'String',
        required:true,
        lowercase:tru

    },
    description:{
        type:"String",
        required:true
    },
    class:{
        type:"String",
        required:true
    },
    price:Number,
    priceAfterDiscount:Number,
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


