const {Schema, model} = require('mongoose');

const orderScheam = Schema({
    paymentMthod:{
        type:'String',
        // enum:[]
    }
})