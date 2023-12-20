const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const connect = require("./database/connect");
const { createEmi, getEmi } = require("./controllers/emi");

const dotenv = require("dotenv");
dotenv.config();

const port = process.env.PORT;
const app = express();
app.use(cors());
app.use(express.json());

app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));

app.post("/calculateEmi", createEmi);

app.get("/calculateEmi", getEmi);

connect()
  .then(() => {
    try {
      app.listen(port, () => {
        console.log(`Server is running at http://localhost:${port}`);
      });
    } catch (error) {
      console.log("Can't connect to the server");
    }
  })
  .catch(() => {
    console.log("Invalid database connection");
  });

module.exports = app;
