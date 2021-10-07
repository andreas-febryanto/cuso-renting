const router = require("express").Router();
const visitorRouter = require("./visitorRouter");
const bookRouter = require("./bookRouter");
const rentRouter = require("./rentRouter");
const errorHandler = require("../middlewares/errorHandler");

router.use("/visitor", visitorRouter);
router.use("/book", bookRouter);
router.use("/rent", rentRouter);
router.use(errorHandler);

module.exports = router;
