const multer = require('multer');

const fileFilter = () => {
    
}

const upload =multer({storage:multer.memoryStorage(), fileFilter })