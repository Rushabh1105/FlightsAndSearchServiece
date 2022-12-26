const express = require("express");

const cityController = require("../../controllers/city-controller");

const router = express.Router();

router.post("/city", cityController.createCity);
router.delete("/city/:id", cityController.deleteCity);
router.get("/city/:id", cityController.getCity);
router.patch("/city/:id", cityController.updateCity);
router.get("/city", cityController.getAllCity);



module.exports = router;