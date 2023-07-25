const {google} = require('googleapis');



module.exports = playlistId => {
const youtube = google.youtube({
    version: "v3",
    auth:process.env.YOUTUBE_API_KEY,
  });

  youtube.playlistItems.list({
    part:'snippet,contentDetails',
    playlistId
  },
  (err, res) => {
    if (err) {
      console.log(`An error occurred: ${err}`);
      return;
}
return res;
}
)
}