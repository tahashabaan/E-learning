const multer = require('multer');

const fileFilter = () => {

}

const storage = multer.diskStorage()

const upload =multer({storage, fileFilter })