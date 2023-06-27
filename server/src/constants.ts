export default class Constants {
    static OpenAi = {
        OrganizationId: 'org-tnbt9iefbpaAa7D9BqtayjZS',
        Bearer: `Bearer ${process.env.OPENAI_API_KEY}`,
    };

    static ApiPrefix = '/api';
    static V1Prefix = `${this.ApiPrefix}/v1`;
    static OpenAiPrefix = `${this.V1Prefix}/openai`;
    static OpenAiModelsPrefix = `${this.OpenAiPrefix}/models`;
}
