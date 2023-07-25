const crypto=  require('crypto')

const asyncHandler = require('as')
const token=crypto.randomBytes(64).toString('hex');


exports.signUp = 
