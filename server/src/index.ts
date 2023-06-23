import dotenv from "dotenv";
import express from "express";

dotenv.config();

const port = process.env.SERVER_PORT;
const app = express();

app.get( "/", ( req, res ) => {
    res.send( "Hello world!" );
} );

app.listen( port, () => {
    console.log( `server started at http://localhost:${ port }` );
} );
