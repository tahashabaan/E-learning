const asyncHandler = require('express-async-handler')
cons
const {uploadImage} = require('../middleware/uploadFile');
const documentsHandle = require('./documents');
const User =require("../models/user");



exports.uploadMiddleware = uploadImage('users').single('profileImage')

exports.addUser = documentsHandle.insertDocument(User);

exports.getUsers = documentsHandle.getDocuments(User);

exports.getUserById = documentsHandle.getDocumentById(User);

exports.updateUserById =  asyncHandler( async(req, res, next)=>{
    const { name, email, role,slug,phone, profileImage } = req.body;
    const document= await doc.findByIdAndUpdate(req.params.id, {
        name, email, role,slug,phone, profileImage 
    })

     res
     .status(204)
     .json({message:'updated document', document})
})

exports.changePassword =  asyncHandler(async(req, res, next)=>{
    const saltPass = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(val, saltPass)

    const { password } = req.body;
    const document= await doc.findByIdAndUpdate(req.params.id, {
        password:hashPassword
    })
    
     res
     .status(204)
     .json({message:'updated password', document})
})

exports.delUserById = documentsHandle.delDocumentById(User);
