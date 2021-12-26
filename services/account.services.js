const { account } = require("./../models");
const Joi = require("joi");
const bcrypt = require("bcrypt");
class Account {
  createAccount = async (email, password, repassword) => {
    let result = await account.findAll({
      where: {
        email,
      },
      raw: true,
    });
    if (result.length > 0) {
      return {
        statusCode: 400,
        message:
          "Account already exists, please register with another account !",
      };
    } else {
      const schema = Joi.object({
        password: Joi.string().pattern(new RegExp("^[a-zA-Z0-9]{3,30}$")),

        repassword: Joi.ref("password"),

        email: Joi.string().email({
          minDomainSegments: 2,
          tlds: { allow: ["com", "net"] },
        }),
      });
      const { error, value } = schema.validate({
        email,
        password,
        repassword,
      });
      if (error) {
        return {
          statusCode: 400,
          message: error.details[0].message,
        };
      }
      const saltRounds = 10;
      const myPlaintextPassword = value.password;
      bcrypt.hash(myPlaintextPassword, saltRounds).then(async function (hash) {
        await account.create({
          email: value.email,
          password: hash,
          repassword: hash,
        });
      });
      return {
        statusCode: 200,
        message: `Create account successfully !`,
      };
    }
  };
}
module.exports = new Account();
