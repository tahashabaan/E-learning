const asyncHandler = require('express-async-handler')
const multer = require('multer');
const {upload} = require('../midd')
const documentsHandle = require('./documents');
const User =require("../models/user");
const ErrorHandle = require('../utils/errorHandle');


// const fileFilter = (req, file , cb) => {
//   if(file.mimetype.startwith('image'))
//     return cb(null, true)
  
//     cb(new ErrorHandle({message:'accespt only image...'}))
// }
// const storage = multer.diskStorage({
//     destination:function (req, file , cb) {
//         cb(null,'uploads/users');
//     },
//   filename: function(req, res, file) {
//     if (file) { 
//       const filename =Date.now() + '-' + Math.round(Math.random() * 1E9)+'-' + file.originalname();
//       cb(null, filename)
//     return req.body.imageProfile = filename;
//     }
//     cb(new ErrorHandle({message:'should upload file...', statusCode:422}), false)
//   }
// })

exports.uploadMiddleware = upload('courses', 'image').single('image')

exports.uploadMiddleware = upload.single('profileImage');

exports.addUser = documentsHandle.insertDocument(User);

exports.getUsers = documentsHandle.getDocuments(User);

exports.getUserById = documentsHandle.getDocumentById(User);

exports.updateUserById = documentsHandle.updateDocumentById(User);

exports.delUserById = documentsHandle.delDocumentById(User);

