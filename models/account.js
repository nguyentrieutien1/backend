"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class accounts extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  accounts.init(
    {
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      repassword: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "account",
    }
  );
  return accounts;
};
