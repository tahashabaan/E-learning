const asyncHandler = require('express-async-handler')

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
    if (!document)
      return next(new ErrorHandle({message:'failed updated document', statusCode:404}));

     res
     .status(204)
     .json({message:'updated document', document})
})

exports.changeP =  asyncHandler( async(req, res, next)=>{
    const { name, email, role,slug,phone, profileImage } = req.body;
    const document= await doc.findByIdAndUpdate(req.params.id, {
        name, email, role,slug,phone, profileImage 
    })
    if (!document)
      return next(new ErrorHandle({message:'failed updated document', statusCode:404}));

     res
     .status(204)
     .json({message:'updated document', document})
})

exports.delUserById = documentsHandle.delDocumentById(User);

