import { Express } from "express";
import { registerOrganization } from "./models";
import Constants from "../../../constants";

const URL_PREFIX = Constants.OpenAiPrefix;

export function registerOpenAi(app: Express): void {
    app.get(`${URL_PREFIX}`, (req, res, _) => {
        res.send(URL_PREFIX);
    });

    registerOrganization(app);
}

/*
    TODO: Proxy certain import openAI commands and work on helper library:
    - https://platform.openai.com/docs/api-reference/requesting-organization
    - Determine what methods we actually need access to
*/
