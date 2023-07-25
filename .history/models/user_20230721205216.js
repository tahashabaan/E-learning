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
    active:
    phone:String,
    passwordChangedAt:Date,
    passwordResetCode:Number,
    passwordResetExpires:Date,
    passwordResetVerified:Boolean,
})

userSchema.pre('save', async function(next){
    if (!this.isModified("password")) {
        return next();
      }
      const hash = await bcrypt.hash(this.password, 12);
      this.password = hash;
      next();
})
module.exports= model('user', userSchema);