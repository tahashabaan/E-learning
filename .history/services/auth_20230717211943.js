const crypto=  require('crypto')

const asyncHandler = require('ex')
const token=crypto.randomBytes(64).toString('hex');


exports.signUp = 
