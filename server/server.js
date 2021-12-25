const mongoose = require("mongoose");
const express = require("express");
const dotEnv = require("dotenv");
const cors = require("cors");
dotEnv.config({ path: "./config/config.env" });
const { router } = require("./routes/routes.js");

const app = express();
app.use(express.json({ extended: true }));
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(router);

const connct_Url = process.env.CONNECTION_URL;
const port = process.env.PORT;

const start = async () => {
  try {
    await mongoose.connect(connct_Url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("successfully connected to the DB...");
  } catch (error) {
    console.log(error);
  }
};
start();
app.listen(port, () => {
  console.log(`server is listening to port: ${port}`);
});
