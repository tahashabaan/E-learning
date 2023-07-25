const {Schema, model} = require('mongoose');

const orderScheam = Schema({
    country:String,
    user:{
        type:Schema.Types.ObjectId,
        ref:'user'
    },
    paymentMthod:{
        type:'String',
        // enum:[]
    },

    isPaid:{
        type:Boolean,
        default:false
    },
    paidAt:{
        type:Date
    },
    items:[{
        courses:{
           type: Schema.Types.ObjectId,
           ref: "courses",
           required: true,
        },
        price:{
            type: Number,
            required: true,
        }
    }],

totalPriice:{
    type: Number,
    required: true,
}

},   { timestamps: true })

module.exports = model('order', orderScheam)