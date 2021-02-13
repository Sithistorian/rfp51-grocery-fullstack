// YOUR SERVER CODE HERE

const express = require("express");
const app = express();
const port = 8080;
const cors = require("cors");
const db = require("../db/index.js");
app.use(cors());

app.get('/', (req, res) => {
  res.send('This is working')
})


app.listen(port, () => {
  console.log("listening on 8080");
});
