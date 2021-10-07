const router = require("express").Router();

router.get("/", (req, res) => {
  res.send("router book");
});

module.exports = router;
