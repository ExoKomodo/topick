import { Express } from "express";
import Constants from "../constants";
import { registerV1 } from "./v1";

const endpointPrefix = Constants.Api.Prefix;

export function registerApi(app: Express): void {
    app.get(endpointPrefix, (req, res, _) => {
        res.send(endpointPrefix);
    });

    registerV1(app);
}
