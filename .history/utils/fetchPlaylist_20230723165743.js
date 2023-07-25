const {google} = require('googleapis');



module.exports = async playlistId => {
const youtube = google.youtube({
    version: "v3",
    auth:process.env.YOUTUBE_API_KEY,
  });

 const playListItem =  await youtube.playlists.list({
    part:'snippet,contentDetails',
    pla:playlistId
  })

    if (!playListItem) {
      console.log(`An error occurred: ${err}`);
      return ;
}
     return (playListItem);
}