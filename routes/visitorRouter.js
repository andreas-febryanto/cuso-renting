const router = require("express").Router();

router.get("/", (req, res) => {
  res.send("router visitor");
});

module.exports = router;
