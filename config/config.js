require("dotenv").config();
module.exports = {
  development: {
    username: process.env.USER_DB,
    password: process.env.PASSWORD_DB,
    database: process.env.DB,
    host: process.env.HOST_DB,
    port: process.env.PORT_DB,
    dialect: "postgres",
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
  },

  production: {
    username: process.env.USER_DB,
    password: process.env.PASSWORD_DB,
    database: process.env.DB,
    host: process.env.HOST_DB,
    port: process.env.PORT_DB,
    dialect: "postgres",
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
  },
};
