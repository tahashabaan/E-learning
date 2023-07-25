const {Router}  =require('express');
const {google} = require('googleapis');

consy
const router = Router();

router.get('/', (req, res, next) => {
    const youtube = google.youtube({
        version: "v3",
        auth:process.env.YOUTUBE_API_KEY,
      });

      youtube.playlistItems.list({
        part:'snippet,contentDetails',
        playlistId:'PLkzDzmo9y3VEKHm_b0YoQQokmIVG93gTh'
      },
      (err, res) => {
        if (err) {
          console.log(`An error occurred: ${err}`);
          return;
        }
        console.log(res.data.items)

        // console.log(res.data.items)
        // const channel = res.data.items[0];
        // console.log(`Channel title: ${channel.snippet.title}`);
        // console.log(`Total views: ${channel.statistics.viewCount}`);
        // console.log(`Total subscribers: ${channel.statistics.subscriberCount}`);
      })


})

module.exports = router;