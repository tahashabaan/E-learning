const path = require('path');

const express = require('express');
const morgan = require('morgan');
const dotenv = require('dotenv');
const bodyParser=require('body-parser');
const cors = require('cors');

import dbConnect from './utils/database';

const app =express();

// env
dotenv.config( {path:"config.env"} );

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'uploads')));
app.use(cors());

if (process.env.NODE_ENV ==='development' ) {
    app.use(morgan('dev')) ;
    console.log(`'node develpment':${process.env.NODE_ENV}`)
}


const PORT = process.env.PORT || 8080;
const server =  app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`)
})

process.on('unhandledRejection', (err) => {
    onsole.log(`unhandled rejection Error ${err.name} ${err.message}`);
    server.close(() => {
        console.log('shuting down.......')
        process.exit(1);
    })
})