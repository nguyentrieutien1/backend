const account = require("./../services/account.services");
class Account {
  createAccount = async (req, res) => {
    let { email, password, repassword } = req.body;
    let result = await account.createAccount(email, password, repassword);
    return res.json({
      result,
    });
  };
}
module.exports = new Account();
