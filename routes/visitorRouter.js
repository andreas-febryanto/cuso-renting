const router = require("express").Router();
const visitorController = require("../controllers/visitorController");

router.get("/", visitorController.getAllVisitor);
router.post("/", visitorController.createVisitor);
router.put("/:id", visitorController.updateVisitor);
router.delete("/:id", visitorController.deleteVisitor);

module.exports = router;
