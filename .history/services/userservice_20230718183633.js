const asyncHandler = require('express-async-handler')
const multer = require('multer');

const {uploadImage} = require('../middleware/uploadFile');
const documentsHandle = require('./documents');
const User =require("../models/user");
const ErrorHandle = require('../utils/errorHandle');



exports.uploadMiddleware = uploadImage('users').single('profileImage')

exports.addUser = documentsHandle.insertDocument(User);

exports.getUsers = documentsHandle.getDocuments(User);

exports.getUserById = documentsHandle.getDocumentById(User,userId);

exports.updateUserById = documentsHandle.updateDocumentById(User,userId);

exports.delUserById = documentsHandle.delDocumentById(User,userId);

