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
    

})