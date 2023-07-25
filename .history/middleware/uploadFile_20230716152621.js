const multer = require('multer');

const fileFilter = () => {

}

const storage = multer.diskStorage({
    destination:function (req, file , cb) {
        cb(null, );
    },
  filename: function(req, res, file) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)+'-' + file.originalname
    cb(null, uniqueSuffix)
  }
})

const upload =multer({storage, fileFilter })