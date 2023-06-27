import dotenv from "dotenv";
// IMPORTANT: This must be called before importing any other modules
dotenv.config();

import express from "express";
import Constants from './constants';
import { registerApi } from "./api";

const port = Constants.Port;
const app = express();

app.get("/", (req, res, _) => {
    res.send(`${Constants.BaseUrl}${Constants.Api.V1.Prefix}/topic`);
});

registerApi(app);

app.listen(port, () => {
    console.log(`server started at http://localhost:${port}`);
});
