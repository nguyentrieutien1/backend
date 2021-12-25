const express = require("express");
const { Pool, Client } = require("pg");
const connectDb = require("./connectDB/connect");
const { account } = require("./models");
const app = express();
require("dotenv").config();
const PORT = process.env.PORT || 2000;
connectDb();
app.get("/", async (req, res) => {
  let result = await account.findAll();
  return res.json({
    result,
  });
});
app.listen(PORT, () => {
  console.log("App listening on link http://localhost:" + PORT);
});
