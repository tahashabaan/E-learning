const {Router}  =require('express');
const {google} = require('googleapis');

const lecuterService= require('../services/lecuterService')
const router = Router();

router.post('/',lecuterService.createLecuters)




module.exports = router;