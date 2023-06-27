import { Express } from "express";
import { registerOpenAi } from "./openai";

import Constants from "../../constants";

const URL_PREFIX = Constants.V1Prefix;

export function registerV1(app: Express): void {
    app.get(`${URL_PREFIX}`, (req, res, _) => {
        res.send(URL_PREFIX);
    });

    registerOpenAi(app);
}
