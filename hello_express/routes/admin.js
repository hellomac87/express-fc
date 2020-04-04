const express = require("express");
const router = express.Router();

// admin
router.get("/", (req, res) => {
  res.send("admin 이후 url");
});

router.get("/products", (req, res) => {
  //   res.send("admin products");
  res.render("admin/products.html", {
    message: `<h1>태그가 출력 됩니다.</h1>`,
    online: "express"
  });
});

module.exports = router;
