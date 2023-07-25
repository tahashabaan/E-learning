co path from "path";
co {fileURLToPath} from 'url';

co express from "express";
co morgan from "morgan";
co dotenv from "dotenv";
co bodyParser from "body-parser";
co cors from "cors";co

co categoryRoute from "./routes/categoryRoute";

const app =express();

const __filename = fileURLToPath(import.meta.url);
const __dirname=path.dirname(__filename)

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