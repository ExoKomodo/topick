import { Express } from "express";
import Constants from "../constants";
import { registerV1 } from "./v1";

const URL_PREFIX = Constants.Api.Prefix;

export function registerApi(app: Express): void {
    app.get(URL_PREFIX, (req, res, _) => {
        res.send(URL_PREFIX);
    });

    registerV1(app);
}
