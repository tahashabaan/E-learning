const multer = require('multer');

const fileFilter = () => {

}

const storage = multer.diskStorage({
    destination:
})

const upload =multer({storage, fileFilter })