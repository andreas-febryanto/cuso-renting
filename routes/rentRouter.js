const router = require("express").Router();
const rentController = require("../controllers/rentController");

router.get("/", rentController.getAllRent);
router.get("/:id", rentController.getRent);
router.post("/", rentController.createRent);
router.put("/:id", rentController.updateRent);
router.delete("/:id", rentController.deleteRent);

module.exports = router;
