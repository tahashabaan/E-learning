const multer = require('multer');

const ErrorHandle = require('../utils/errorHandle');

const fileFilter = (req, file , cb) => {
  if(file.mimetype.startsWith('image'))
    return cb(null, true)
  
    cb(new ErrorHandle({message:'accespt only image...'}))
}
const multerStorge =dst =>
 multer.diskStorage({
    destination:function (req, file , cb) {
        cb(null,'uploads/users');
    },
  filename: function(req, res, file) {
    if (file) { 
      const filename =Date.now() + '-' + Math.round(Math.random() * 1E9)+'-' + file.originalname();
      cb(null, filename)
    return req.body.imageProfile = filename;
    }
    cb(new ErrorHandle({message:'should upload file...', statusCode:422}), false)
  }
})

const upload = multer({})
exports.upload = upload;