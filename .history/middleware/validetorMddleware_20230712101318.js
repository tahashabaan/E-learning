const { validationResult } = require('express-validator');

module.exports = (req, res, next) => {
    const result = validationResult(req);

if(!result.isEmpty()){
eturn  res.status(400).json({error:res})
}
}
