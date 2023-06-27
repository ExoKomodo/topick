const envs = {
    Development: "dev",
    Staging: "stg",
    Production: "prd",
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
    // static BaseUrl = 'http://localhost:8080';
    static BaseUrl = 'https://services.topick.fyi';
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
