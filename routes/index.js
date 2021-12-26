const createAccount = require("./createAccount.route");
module.exports = (app) => {
  app.use("/", createAccount);
};
