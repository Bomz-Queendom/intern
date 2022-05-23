const { getAll, create, getOne, filterByStatus, deleteOne, updateStatus } = require("../controller/petitionController");
const express = require('express');
const { midCreate, midID, midFilter, midUpdate } = require('../middleware/petitionMidleware');
const router = express.Router();

router.post("/create/:id", midCreate, create);
router.get("/getAll", getAll);
router.get("/getOne/:id", midID, getOne);
router.get("/filterByStatus", midFilter, filterByStatus);
router.delete("/delete/:id", midID, deleteOne);
router.patch('/updateStatus/:id', midUpdate, updateStatus);
router.use("/images", express.static('./public/images/petitionImage'));

module.exports = router;