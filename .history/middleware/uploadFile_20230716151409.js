const multer = require('multer');

const fileFilter = () => {

}

const storage = multer.diskStorage({
    destination:function (req, )
})

const upload =multer({storage, fileFilter })