import dotenv from "dotenv";
import express from "express";
import { registerApi } from "./api";

dotenv.config();

const API_PREFIX = '/api';

const port = process.env.SERVER_PORT;
const app = express();

app.get("/", (req, res) => {
    res.send("Hello world!");
});

registerApi(app);

app.listen(port, () => {
    console.log(`server started at http://localhost:${port}`);
});

/*
    TODO: Proxy certain import openAI commands and work on helper library:
    - https://platform.openai.com/docs/api-reference/requesting-organization
    Example:
    curl https://api.openai.com/v1/models \
      -H "Authorization: Bearer $OPENAI_API_KEY" \
      -H "OpenAI-Organization: <org-id>"
*/