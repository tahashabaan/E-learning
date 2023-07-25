const {Router}  =require('express');
const {google} = require('googleapis');

const lecuterService= require('../services/lecuterService')
const router = Router();

router.get('/',lecuterService.getLecuters)




module.exports = router;