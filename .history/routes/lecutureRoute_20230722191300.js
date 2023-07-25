const {Router}  =require('express');
const {youtube} = require('googleapis');

const router = Router();

router.get('', (req, res, next) => {
    const youtube = google.youtube({
        version: "v3",
        auth: "YOUR_API_KEY",
      });

})
