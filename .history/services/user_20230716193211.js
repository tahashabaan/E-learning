const asyncHandler = require('express-async-handler')
const slugify = require('slugify');

const User =require("../models/user");
const ErrorHandle = require('../utils/errorHandle');




exports.addUser 
