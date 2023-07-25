const asyncHandler = require("express-async-handler");
const slugify = require("slugify");

const fetchPlayList = require("../utils/fetchPlaylist");
const Lecuter = require("../models/lectures");
const ErrorHandle = require("../utils/errorHandle");

exports.createLecuters = asyncHandler(async (req, res, next) => {
  const data = await fetchPlayList("PLkzDzmo9y3VGQRWG-VPysJVRj3Q1YV0ry");
  console.log()
  data.data.items
    .map(async (item) => {
      await Lecuter.create({
        publishedAt: item.snippet.publishedAt,
        channelId: item.snippet.channelId,
        playlistId: item.snippet.playlistId,
        videoId: item.snippet.videoId,
        title: item.snippet.title,
        description: item.snippet.description,
        thumbnail: item.snippet.thumbnails.standard.url,
      })
      return true;
    })
//     .then((result) => {
//       if (result)
//         res.status(200).json({ message: "sucessfully create lecuter.." });
//     })
//     .catch((err) => {
//       res.status(422).json({ message: "fail create lecuter.."+err });
//     });

res.json({data})
});
