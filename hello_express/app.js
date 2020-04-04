const express = require("express");

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("hello express");
});

app.use("/admin", require("./routes/admin"));
app.use("/contacts", require("./routes/contacts"));

app.listen(port, () => {
  console.log("express listening on port", port);
});
