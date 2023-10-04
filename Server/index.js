const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());




app.get("/", (req, res) => {
  res.send("Sever is running");
});
app.listen(port, () => {
    console.log(`Sever is running`)
  })