const { Sequelize } = require("sequelize");
require("dotenv").config();
module.exports = connect = () => {
  try {
    const sequelize = new Sequelize(
      process.env.DB,
      process.env.USER_DB,
      process.env.PASSWORD_DB,
      {
        host: process.env.HOST_DB,
        dialect: "postgres",
        dialectOptions: {
          ssl: {
            require: true,
            rejectUnauthorized: false,
          },
        },
        logging: false,
      }
    );
    sequelize.authenticate();
    console.log("Connection has been established successfully.");
    return sequelize;
  } catch (error) {
    console.log(error);
  }
};
