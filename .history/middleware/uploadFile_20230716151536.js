const multer = require('multer');

const fileFilter = () => {

}

const storage = multer.diskStorage({
    destination:function (req, file , cb) {
        cb()
    },
  filename: function(req, res, file) {
    
  }
})

const upload =multer({storage, fileFilter })