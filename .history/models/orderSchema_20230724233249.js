const {Schema, model} = require('mongoose');

const orderScheam = Schema({
    user:{
        type:Schema.Types.ObjectId,
        ref:''
    }
    paymentMthod:{
        type:'String',
        // enum:[]
    },

})