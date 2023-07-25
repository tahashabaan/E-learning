const asyncHandler = require('express-async-handler')
const bcrypt = require('bcryptjs');

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
    const { password } = req.body;
    const saltPass = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password, saltPass)

    const document= await doc.findByIdAndUpdate(req.params.id, {
        password:hashPassword,
        passwordChangedAt:Date.now()
    })
    
     res
     .status(204)
     .json({message:'updated password', document})
})

exports.delUserById = documentsHandle.delDocumentById(User);


exports.getLoggedME = asyncHandler( async(req, res, next)=>{
    req.params.id = req.userId;
    next();
})

exports.updateLoggedME = asyncHandler( async(req, res, next)=>{
    req.params.id = req.userId;
    next();
})

exports.delLoggedME = asyncHandler( async(req, res, next)=>{
    req.params.id = req.userId;
    next();
})

expor
