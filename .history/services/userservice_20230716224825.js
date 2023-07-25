const asyncHandler = require('express-async-handler')
const multer = require('multer');

const documentsHandle = require('./documents');
const User =require("../models/user");
const ErrorHandle = require('../utils/errorHandle');


const fileFilter = (req, file , cb) => {
  console.log(file);
}

const storage = multer.diskStorage({
    destination:function (req, file , cb) {
        cb(null,'uploads/users');
    },
  filename: function(req, res, file) {
    if (file) { 
      const filename =Date.now() + '-' + Math.round(Math.random() * 1E9)+'-' + file.originalname();
      cb(null, filename)
    return  req.body.imageProfile = filename;
    }
  }
})

const upload =multer({storage, fileFilter });

exports.uploadMiddleware = upload.single('profileImage');

exports.addUser = documentsHandle.insertDocument(User);

exports.getUsers = documentsHandle.getDocuments(User);

exports.getUserById = documentsHandle.getDocumentById(User);

exports.updateUserById = documentsHandle.updateDocumentById(User);

exports.delUserById = documentsHandle.delDocumentById(User);

