class Config {
  constructor() {
    /* Localhost */
    this.credentials = {
      //baseUrl: 'http://localhost:3000/',
      appName: "Numu Demo",
      version: "1.0.0",
      db: {
        name: "numu-db",
        client: "mongodb",
        host: "127.0.0.1:27017",
        dbUser: "root",
        dbPass: "secret",
        authenticationDB: "",
      },
    };
  }

  getDbCredentials() {
    return this.credentials.db;
  }
}

module.exports = Config;
