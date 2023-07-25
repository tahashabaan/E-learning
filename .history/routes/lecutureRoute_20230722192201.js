const {Router}  =require('express');
const {google} = require('googleapis');

const router = Router();

router.get('', (req, res, next) => {
    const youtube = google.youtube({
        version: "v3",
        auth:process.env.YOUTUBE_API_KEY,
      });

      youtube.channels({
        pa
      })


})
