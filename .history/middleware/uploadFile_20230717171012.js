const multer = require('multer');

const ErrorHandle = require('../utils/errorHandle');

exports.uploadImage = dest => {
const fileFilter = (req, file , cb) => {
  if(file.mimetype.startsWith('image'))
    return cb(null, true)
    cb(new ErrorHandle({message:'accespt only image...'}))
}

const storage= multer.diskStorage({
    destination:function (req, file , cb) {
        cb(null,`uploads/${dest}`);
    },

  filename: function(req, file, cb) {
    if (file) { 
     const filename = dest + '-' + +Date.now() + '-' + Math.round(Math.random() * 1E9)+'-' + file.originalname;
     cb(null, filename)
    }
    cb(new ErrorHandle({message:'should upload file...', statusCode:422}), false)
  }
})

  return multer({storage, fileFilter})
}