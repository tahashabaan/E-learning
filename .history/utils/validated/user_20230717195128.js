const slugify = require('slugify');
const bcrypt = require('bcryptjs')
const {check}  =require('express-validator');

const validationMiddleware = require('../../middleware/validetorMddleware');

exports.createUserValidated = [
    check('name')
    .notEmpty()
    .withMessage('name must be defined')
    .custom(val =>  req.body.slug= slugify(val) ),
    check('email')
    .isEmail()
    .withMessage('accept email only..')
    .notEmpty()
    .withMessage('email must be defined'),
    check('password')
    .notEmpty()
    .withMessage('password must be defined')
    .isLength({min: 6})
    .withMessage('min password is 6')
    .custom(async (val, {req}) => {
       const saltPass = await bcrypt.genSalt(10);
       const hashPassword = await bcrypt.hash(val, saltPass)
       if(hashPassword) {
        return req.body.password = hashPassword
       }
      throw new Error('somthing went wrong!..')
    // check passsword with cnfirm
    }),
    check('confirmPassword')
    .notEmpty()
    .withMessage('confirmPassword must be defined')
    .isLength({min: 6})
    .withMessage('min password is 6')
    .custom(async (val, {req}) => {
        if(!(bcrypt.compare(val, req.body.password))) 
          
    }),
    check('profileImage')
    .optional(),
    check('phone')
    .optional()
    .isMobilePhone(['ar-EG', 'ar-AE']),
    validationMiddleware
]

exports.getUserValidetor =[
    check('userId')
    .notEmpty()
    .withMessage('userId must be exicted')
    .isMongoId()
    .withMessage('must be mongooseid'),
    validationMiddleware
]

exports.updateUserValidetor =[
    check('userId')
    .notEmpty()
    .withMessage('userId must be exicted')
    .isMongoId()
    .withMessage('must be mongooseid'),
    check('name')
    .optional(),
    check('email')
    .optional(),
    check('password')
    .optional(),
    validationMiddleware
]

exports.delUserValidetor =[
    check('userId')
    .notEmpty()
    .withMessage('userId must be exicted')
    .isMongoId()
    .withMessage('must be mongooseid'),
    validationMiddleware
]