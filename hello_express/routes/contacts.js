const express = require("express");
const router = express.Router();

// contacts
router.get("/", (req, res) => {
  res.send("contacts 이후 url");
});

router.get("/list", (req, res) => {
  res.send("contacts products");
});

module.exports = router;
