const multer = require('multer');

const fileFilter = () => {

}

const storage = multer.diskStorage({
    destination:function ()
})

const upload =multer({storage, fileFilter })