const {Router}  =require('express');
const {google} = require('googleapis');

const router = Router();

router.get('', (req, res, next) => {
    const youtube = google.youtube({
        version: "v3",
        auth:process.env.YOUTUBE_API_KEY,
      });

      youtube.channels({
        part:'',
        id:'Ta5ref_Mobarmg'
      },
      (err, res) => {
        if (err) {
          console.log(`An error occurred: ${err}`);
          return;
        }
        console.log(res)
        // const channel = res.data.items[0];
        // console.log(`Channel title: ${channel.snippet.title}`);
        // console.log(`Total views: ${channel.statistics.viewCount}`);
        // console.log(`Total subscribers: ${channel.statistics.subscriberCount}`);
      })


})
