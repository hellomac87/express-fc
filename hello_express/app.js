const express = require("express");

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("hello express");
});

app.get("/dobby", (req, res) => {
  res.send("hello dobby!");
});

app.listen(port, () => {
  console.log("express listening on port", port);
});
