let mongoose = require("mongoose");
let config = require("./config");
let configAttributes = new config();

const host = configAttributes.getDbCredentials().host;
const database = configAttributes.getDbCredentials().name;
const user = configAttributes.getDbCredentials().dbUser;
const pass = configAttributes.getDbCredentials().dbPass;
const authDb = configAttributes.getDbCredentials().authenticationDB;

class Database {
  constructor() {
    this.connect();
  }

  connect() {
    let connectionUrl = `mongodb://${host}/${database}`;
    mongoose
      .connect(connectionUrl)

      /* Use this if db requires authentication */
      // mongoose.connect(connectionUrl, {
      //     user               : user,
      //     pass               : pass,
      //     useNewUrlParser    : true,
      //     useUnifiedTopology : true
      // })

      .then(() => {
        console.log("Connected to " + database + " database");
      })
      .catch((err) => {
        console.log("err: ", err);
        console.error(
          "Connection error with " +
            database +
            " database on host: " +
            host +
            ""
        );
      });
  }
}

module.exports = new Database();
