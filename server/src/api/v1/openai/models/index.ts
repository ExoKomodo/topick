import { Express } from "express";
import Constants from "../../../../constants";

const URL_PREFIX = Constants.OPENAI_MODELS_PREFIX;

export function registerOrganization(app: Express): void {
    app.get(`${URL_PREFIX}`, (req, res) => {
        res.send(URL_PREFIX);
    });
}

// TODO: Implement as a test and nothing more
// Example:
//     curl https://api.openai.com/v1/models \
//       -H "Authorization: Bearer $OPENAI_API_KEY" \
//       -H "OpenAI-Organization: <org-id>"
