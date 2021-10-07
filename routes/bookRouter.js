const router = require("express").Router();
const bookController = require("../controllers/bookController");

router.get("/", bookController.getAllBook);
router.post("/", bookController.createBook);
router.put("/:id", bookController.updateBook);
router.delete("/:id", bookController.deleteBook);

module.exports = router;
