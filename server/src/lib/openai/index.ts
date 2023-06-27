import { Configuration, OpenAIApi } from "openai";
import Constants from "../../constants";

export function getClient(): OpenAIApi {
    const configuration = new Configuration({
        apiKey: Constants.OpenAi.ApiKey,
    });
    return new OpenAIApi(configuration);
}
