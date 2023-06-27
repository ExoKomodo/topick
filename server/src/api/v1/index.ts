import { Express } from "express";
import { registerTopic } from "./topic";

import Constants from "../../constants";

const endpointPrefix = Constants.Api.V1.Prefix;

export function registerV1(app: Express): void {
    app.get(endpointPrefix, (req, res, _) => {
        res.send(endpointPrefix);
    });

    registerTopic(app);
}
