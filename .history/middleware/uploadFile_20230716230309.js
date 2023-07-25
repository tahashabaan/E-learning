const multer = require('multer');

const ErrorHandle = require('../utils/errorHandle');

const fileFilter = (req, file , cb) => {
  if(file.mimetype.startsWith('image'))
    return cb(null, true)
  
    cb(new ErrorHandle({message:'accespt only image...'}))
}
const multerStorge =(dst, imgName) =>
 multer.diskStorage({
    destination:function (req, file , cb) {
        cb(null,`uploads/${dst}`);
    },
  filename: function(req, res, file) {
    if (file) { 
      const filename =Date.now() + '-' + Math.round(Math.random() * 1E9)+'-' + file.originalname();
      cb(null, filename)
    return req.body.imgName = filename;
    }
    cb(new ErrorHandle({message:'should upload file...', statusCode:422}), false)
  }
})

exports. upload = (dest, imgName) =>
   multer({storage:multerStorge(dest, imgName)})
