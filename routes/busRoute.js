const express = require('express');
const router = express.Router();
const busController = require("../controllers/busController");

router.post("/buses",busController.addBusDetails);

router.get("/buses/available/:seats",busController.getBusDetails);


module.exports = router;