import { Express } from "express";
import Constants from "../../../../constants";

const URL_PREFIX = Constants.OpenAiModelsPrefix;

// TODO: Replace with openai module way
export function registerOrganization(app: Express): void {
    app.get(`${URL_PREFIX}`, async (req, res, next) => {
        const response = await fetch('https://api.openai.com/v1/models', {
            headers: {
                Authorization: Constants.OpenAi.Bearer,
                'OpenAI-Organization': Constants.OpenAi.OrganizationId,
            }
        });
        const json = await response.json();
        console.log(json);
        res.send(json);
    });
}
