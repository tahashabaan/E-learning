const {check} = require('express-validator');

const validatedMiddleware = require('../../middleware/validetorMddleware');


exports.createSubCategoryValidated = [
    check()
    validatedMiddleware 
]
