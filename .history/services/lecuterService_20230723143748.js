const asyncHandler = require('express-async-handler')
const slugify = require('slugify');



const fetchPlayList = require('../utils/fetchPlaylist')
const Lecuter =require("../models/lectures");
const ErrorHandle = require('../utils/errorHandle');

exports.getLecuters = asyncHandler (async (req, res, next ) => {
    fetchPlayList
})
