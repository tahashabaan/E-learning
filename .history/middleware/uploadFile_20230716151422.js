const multer = require('multer');

const fileFilter = () => {

}

const storage = multer.diskStorage({
    destination:function (req, file , cb) {

    },
    filename:
})

const upload =multer({storage, fileFilter })