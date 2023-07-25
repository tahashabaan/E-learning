const {google} = require('googleapis');



module.exports = async playlistId => {
const youtube = google.youtube({
    version: "v3",
    auth:process.env.YOUTUBE_API_KEY,
  });

 const playListItem =  await youtube.playlistItems.list({
    part:'snippet,contentDetails',
    channelId:playlistId
  })

    if (!playListItem) {
      console.log(`An error occurred: ${err}`);
      return ;
}
     return (playListItem);
}