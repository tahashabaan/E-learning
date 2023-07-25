const asyncHandler = require("express-async-handler");
const slugify = require("slugify");

const fetchPlayList = require("../utils/fetchPlaylist");
const Lecuter = require('../models/lectures')
const ErrorHandle = require("../utils/errorHandle");

exports.createLecuters = asyncHandler(async (req, res, next) => {
  const data = await fetchPlayList("PLkzDzmo9y3VGQRWG-VPysJVRj3Q1YV0ry");
//   console.log(data)
 let items = data.data.items[0];
 await Lecuter.create({
   title:items.snippet.title,
   description:items.snippet.description,
   playlistId:items.snippet.playlistId,
   videoId
   thumbnail:items.snippet.thumbnails.standard.url,
 })
    
//     .then((result) => {
//       if (result)
//         res.status(200).json({ message: "sucessfully create lecuter.." });
//     })
//     .catch((err) => {
//       res.status(422).json({ message: "fail create lecuter.."+err });
//     });

// res.json({data})
});
