const path = require ("path");
const express = require( "express");
const morgan = require("morgan");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const cors = require("cors");
const asuncHandler = require('express-async-handler');

const dbConnect =require('./utils/database');
const categoryRoute = require("./routes/categoryRoute");
const subCategoryRoute = require('./routes/subCategoryRoute');
const courseRoute = require('./routes/courseRoute');
const userRoute = require('./routes/userRoute');

const app =express();

// const __filename = fileURLToPath(import.meta.url);
// const __dirname=path.dirname(__filename)

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

// routes 
app.use('/api/v1/category', categoryRoute);
app.use('/api/v1/subCategory', subCategoryRoute);
app.use('/api/v1/courses', courseRoute);
app.use('/api/v1/users', courseRoute);




// error handleing in express Route
app.use((err, req, res, next) => {
    err.statusCode = err.statusCode || 500;
    res.status(err.statusCode ).json({
        err,
        msg: err.message,
        stack:err.stack,
        success: false,
      });
})

// console.log(typeof process.env.DB_URI);
const PORT = process.env.PORT || 8080;
const server =  app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`)
    dbConnect(process.env.DB_URI);
})

// error outside express
process.on('unhandledRejection', (err) => {
    console.log(`unhandled rejection Error ${err.name} ${err.message}`);
    server.close(() => {
        console.log('shuting down.......')
        process.exit(1);
    })
})