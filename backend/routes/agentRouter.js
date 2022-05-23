const express = require("express");
const { findOne, findAll, search, update, deleteOne } = require("../controller/agentController");
const { midId, midDetail } = require("../middleware/agentMiddleware");
const router = express.Router();

router.get("/getAll", findAll);
router.get("/getOne/:id", midId, findOne);
router.get("/search", search);
router.patch("/update/:id", midDetail, update);
router.delete("/delete/:id", midId, deleteOne);

module.exports = router;