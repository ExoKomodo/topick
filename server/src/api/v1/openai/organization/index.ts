import { Express } from "express";
import Constants from "../../../../constants";

const URL_PREFIX = Constants.OPENAI_ORGANIZATION_PREFIX;

export function registerOrganization(app: Express): void {
    app.get(`${URL_PREFIX}`, (req, res) => {
        res.send(URL_PREFIX);
    });
}
