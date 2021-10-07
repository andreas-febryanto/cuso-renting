const router = require("express").Router();
const visitorRouter = require("./visitorRouter");
const bookRouter = require("./bookRouter");
const rentRouter = require("./rentRouter");

router.use("/visitor", visitorRouter);
router.use("/book", bookRouter);
router.use("/rent", rentRouter);

module.exports = router;
