const asyncHandler = require('express-async-handler')
const slugify = require('slugify');

const fetchPlayList = require('../utils/fetchPlaylist')
const Lecuter =require("../models/lectures");
const ErrorHandle = require('../utils/errorHandle');

exports.getLecuters = asyncHandler (async (req, res, next ) => {
   const data= await fetchPlayList('PLkzDzmo9y3VGQRWG-VPysJVRj3Q1YV0ry');
   data.data.items.map(item =>{
      console.log(item)
      await Lecuter.create({
         publishedAt:,
         channelId:,
         playlistId:,
         videoId::,
         title:,
         description:,
         thumbnails:
      })
   } )

})
