const multer = require('multer');

const fileFilter = () => {

}

const storage = multer.dis()

const upload =multer({storage, fileFilter })