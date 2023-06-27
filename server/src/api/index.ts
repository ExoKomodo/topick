import { Express } from "express";
import Constants from "../constants";
import { registerV1 } from "./v1";

const URL_PREFIX = Constants.API_PREFIX;

export function registerApi(app: Express): void {
    app.get(`${URL_PREFIX}`, (req, res) => {
        res.send(URL_PREFIX);
    });

    registerV1(app);
}
