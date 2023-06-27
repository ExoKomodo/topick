import { Express } from "express";
import { registerTopic } from "./topic";

import Constants from "../../constants";

const URL_PREFIX = Constants.Api.V1.Prefix;

export function registerV1(app: Express): void {
    app.get(URL_PREFIX, (req, res, _) => {
        res.send(URL_PREFIX);
    });

    registerTopic(app);
}
