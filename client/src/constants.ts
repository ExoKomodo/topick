const envs = {
    Development: "development",
    Staging: "staging",
    Production: "production",
};

export default class Constants {
    static DebounceInterval = 250;
    static BaseUrl = process.env.NODE_ENV === envs.Development ? 'http://localhost:8080' : 'https://services.topick.fyi';
};
