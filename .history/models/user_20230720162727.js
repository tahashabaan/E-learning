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
        unquie:true
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
      type:String
    },
    phone:String,
    passwordChangedAt:Date,
    passwordResetCode:Number,
    passwordResetExpires:Date,
    passwordResetVerified:Boolean,
})

if (!this.isModified("password")) {
    return next();
  }
  const hash = await bcrypt.hash(this.password, Number(bcryptSalt));
  this.password = hash;
  next();
module.exports= model('user', userSchema);