import dotenv from "dotenv";
import express from "express";
import { registerApi } from "./api";

dotenv.config();

const API_PREFIX = '/api';

const port = process.env.SERVER_PORT;
const app = express();

app.get("/", (req, res, _) => {
    res.send("Hello world!");
});

registerApi(app);

app.listen(port, () => {
    console.log(`server started at http://localhost:${port}`);
});
