const envs = {
    Development: "development",
    Staging: "staging",
    Production: "production",
};

const apiPrefix = '/api';
const v1Prefix = `${apiPrefix}/v1`;
const topicPrefix = `${v1Prefix}/topic`;

export default class Constants {
    static OpenAi = {
        ApiKey: process.env.OPENAI_API_KEY,
        OrganizationId: 'org-tnbt9iefbpaAa7D9BqtayjZS',
    };

    static Envs = envs;
    static Env = process.env.NODE_ENV;
    static BaseUrl = process.env.NODE_ENV === envs.Development ? 'http://localhost:8080' : 'https://services.topick.fyi';
    static Port = process.env.SERVER_PORT
    static Api = {
        Prefix: apiPrefix,
        V1: {
            Prefix: v1Prefix,
            Topic: {
                Prefix: topicPrefix,
            },
        },
    };
}
