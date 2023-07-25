const path = require('path');

const express = require('express');
const morgan = require('morgan');
const dotenv = require('dotenv');
const bodyParser=require('body-parser');






process.on('unhandledRejection', (err) => {
    onsole.log(`unhandled rejection Error ${err.name} ${err.message}`);
    server.close(() => {
        console.log('shuting down.......')
        process.exit(1);
    })
})