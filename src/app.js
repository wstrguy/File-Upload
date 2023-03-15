
require("dotenv").config();
const express = require("express");
const connectDb = require("./database/db");
const config = require("./config");
const ejs = require("ejs");
const userRoute = require("./routes/user.route");
const app = express();
const log = require("./utils/logger");

connectDb();

const port = config.port;

app.use(express.json()); // for parsing application/json
app.set("view engine", "ejs");
app.set("views", "src/views")
app.use(express.static(__dirname + "/public")); //C:\Users\user\Desktop\file_upload\src\public


app.use("/user", userRoute);

app.listen(port, () => {
  const error = new Error("Server is not running");
  log.info(`Server is running on port ${port}`);
});
