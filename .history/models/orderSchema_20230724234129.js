const {Schema, model} = require('mongoose');

const orderScheam = Schema({
    user:{
        type:Schema.Types.ObjectId,
        ref:'user'
    },
    paymentMthod:{
        type:'String',
        // enum:[]
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
    }]
totalPriice:Number

},   { timestamps: true })