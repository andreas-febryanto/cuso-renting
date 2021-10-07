const router = require("express").Router();

router.get("/", (req, res) => {
  res.send("router rent");
});

module.exports = router;
