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
        lowercase:true
    },
    description:{
        type:"String",
        required:true
    },
    class:{
        type:"String",
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    priceAfterDiscount:Number,
    rating:{
        type:Number,
        min:[1, 'min rating is one'],
        max:[5, 'max rating is 5']
    },
    ratingQuantity:

    avgRating:Number,
    image:String,
    totalStudent:Number,
    numSold:Number,
    category:{
        type:Schema.Types.ObjectId,
        ref:'category',
        required:true
    },
    subCategory:{
        type:Schema.Types.ObjectId,
        ref:'subCategory',
        
    },
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


