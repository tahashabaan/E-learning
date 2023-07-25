const {Schema, model} = require('mongoose');


const userSchema = new Schema({
    name:{
        type:'String',
        required: true,
    },
    // slug:{
    //     type:'String',
    //     required:true
    // },
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
        enum:['student', 'instructor', 'manger'],
        default:'student'
    },
    phone:{
        type:'String',
    },
    passwordChangedAt:Date,
    profileImage:{
      type:String,
    },
    phone:String,
    passwordResetCode:Number,
    passwordResetExpires:Date,
    passwordResetVerified:Boolean,
})

userSchema.pre('save', function(req, res,next) {
    console.log(req);
    // this.profileImage = req.filename;
    next();
})
module.exports= model('user', userSchema);