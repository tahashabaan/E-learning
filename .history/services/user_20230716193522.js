const asyncHandler = require('express-async-handler')

const documentsHandle = require('./documents');
const User =require("../models/user");
const ErrorHandle = require('../utils/errorHandle');


const fileFilter = () => {

}

const storage = multer.diskStorage({
    destination:function (req, file , cb) {
        cb(null,'uploads/courses' );
    },
  filename: function(req, res, file) {
    const filename =Date.now() + '-' + Math.round(Math.random() * 1E9)+'-' + file.originalname();
    cb(null, filename)
  }
})

const upload =multer({storage, fileFilter });

exports.uploadMiddleware = upload.single('image');

exports.addUser = documentsHandle.insertDocument(User);

exports.getUsers = documentsHandle.getDocuments(User);

exports.getUserById = documentsHandle.getDocumentById(User);

exports.getUserById = documentsHandle.updateDocumentById(User);

exports.delUserById = documentsHandle.delDocumentById(User);

