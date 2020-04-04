const express = require("express");
const nunjucks = require("nunjucks");

const app = express();
const port = 3000;

nunjucks.configure(
  "template", // path
  {
    autoescapte: true,
    express: app // express 객체
  }
);

app.get("/", (req, res) => {
  res.send("hello express");
});

app.use("/admin", require("./routes/admin"));
app.use("/contacts", require("./routes/contacts"));

app.listen(port, () => {
  console.log("express listening on port", port);
});
