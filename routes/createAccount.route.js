const router = require("express").Router();
const Account = require("./../controllers/account.controller");
router.post("/register", Account.createAccount);

module.exports = router;
