import { Express } from "express";
import { registerOrganization } from "./organization";
import Constants from "../../../constants";

const URL_PREFIX = Constants.OPENAI_PREFIX;

export function registerOpenAi(app: Express): void {
    app.get(`${URL_PREFIX}`, (req, res) => {
        res.send(URL_PREFIX);
    });

    registerOrganization(app);
}
