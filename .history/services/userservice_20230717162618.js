const asyncHandler = require('express-async-handler')
const multer = require('multer');

const {uploadImage} = require('../middleware/uploadFile');
const documentsHandle = require('./documents');
const User =require("../models/user");
const ErrorHandle = require('../utils/errorHandle');



exports.uploadMiddleware = uploadImage('users', 'profileImage').single('profileImage')

exports.addUser = documentsHandle.insertDocument(User, );

exports.getUsers = documentsHandle.getDocuments(User);

exports.getUserById = documentsHandle.getDocumentById(User);

exports.updateUserById = documentsHandle.updateDocumentById(User);

exports.delUserById = documentsHandle.delDocumentById(User);

