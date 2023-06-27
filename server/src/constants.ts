export default class Constants {
    static OpenAi = {
        ApiKey: process.env.OPENAI_API_KEY,
        OrganizationId: 'org-tnbt9iefbpaAa7D9BqtayjZS',
    };

    static Env = process.env.NODE_ENV
    static Port = process.env.SERVER_PORT
    static ApiPrefix = '/api';
    static V1Prefix = `${this.ApiPrefix}/v1`;
    static TopicPrefix = `${this.V1Prefix}/topic`;
    static OpenAiPrefix = `${this.V1Prefix}/openai`;
    static OpenAiModelsPrefix = `${this.OpenAiPrefix}/models`;
}
