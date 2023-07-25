const asyncHandler = require('express-async-handler')
const slugify = require('slugify');

const documentsHandle = require('./documents');
const User =require("../models/user");
const ErrorHandle = require('../utils/errorHandle');




exports.addUser = documentsHandle.insertDocument(User);

exports
