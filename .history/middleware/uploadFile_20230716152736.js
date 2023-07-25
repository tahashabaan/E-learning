const multer = require('multer');

const fileFilter = () => {

}

const storage = multer.diskStorage({
    destination:function (req, file , cb) {
        cb(null, );
    },
  filename: function(req, res, file) {
    const filename =Date.now() + '-' + Math.round(Math.random() * 1E9)+'-' + file.originalname();
    cb(null, filename)
  }
})

const upload =multer({storage, fileFilter });

exports