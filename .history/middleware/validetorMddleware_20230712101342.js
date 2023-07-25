const { validationResult } = require('express-validator');

module.exports = (req, res, next) => {
    const result = validationResult(req);

if(!result.isEmpty()){
   return  res.status(400).json({errors:result.array()})
}
next()
}
