const express = require("express");
const connectDb = require("./connectDB/connect");
const cors = require("cors");
const app = express();
const router = require("./routes/index");
const bodyParser = require("body-parser");
require("dotenv").config();
const PORT = process.env.PORT || 2000;
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
connectDb();
router(app);

app.listen(PORT, () => {
  console.log("App listening on link http://localhost:" + PORT);
});
