const {Schema, model} = require('mongoose');


const userSchema = new Schema({
    name:{
        type:'String',
        required: true,
    },
    email:{
        type:'String',
        required: true,
    },
    password:{
        type:'String',
        required: true,
    },
    role:{
        type:'String',
        default:['student', 'instructor', 'manger']
    },
    phone:{
        type:'String',
        required: true,
    },

})