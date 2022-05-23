const express = require("express");
const { findAll, findOne, Search, update, deleteOne } = require("../controller/villagerController");
const { address } = require("../middleware/authMiddleware");
const { midId, midVillagerDetail } = require("../middleware/villagerMiddlerware");
const router = express.Router();

router.get("/getAll", findAll);
router.get("/getOne/:id", midId, findOne);
router.get("/search", Search);
router.patch("/update/:id", midVillagerDetail, address, update);
router.delete("/delete/:id", midId, deleteOne);

module.exports = router;