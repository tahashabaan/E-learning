const asyncHandler = require('express-async-handler')
const slugify = require('slugify');

const fetchPlayList = require('../utils/fetchPlaylist')
const Lecuter =require("../models/lectures");
const ErrorHandle = require('../utils/errorHandle');

exports.getLecuters = asyncHandler (async (req, res, next ) => {
   const da= await fetchPlayList('PLY3j36HMSHNWNbNp-rOwI6vFw7TiPfsSO');
   console.log(data)

})
