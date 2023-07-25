const bcrypt = require('bcryptjs');
const {Schema, model} = require('mongoose');


const userSchema = new Schema({
    name:{
        type:'String',
        required: true,
    },
    slug:{
        type:'String',
        required:true
    },
    email:{
        type:'String',
        required: true,
        trim:true,
        unqe
    },
    password:{
        type:'String',
        required: true,
    },
    role:{
        type:'String',
        enum:['student', 'instructor', 'manger'],
        default:'student'
    },
    phone:{
        type:'String',
    },
    profileImage:{
      type:String,    },
      phone:String,
      passwordChangedAt:Date,
    passwordResetCode:Number,
    passwordResetExpires:Date,
    passwordResetVerified:Boolean,
})

userSchema.pre('save', async function(next){
    this.password = await bcrypt.hash(  this.password, 10);
    next()
})
module.exports= model('user', userSchema);