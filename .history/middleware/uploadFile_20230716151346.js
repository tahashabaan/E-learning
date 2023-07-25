const multer = require('multer');

const fileFilter = () => {

}

const storage = multer.memoryStorage()

const upload =multer({storage: fileFilter })