const express = require("express");

const cityController = require("../../controllers/city-controller");
const flightController = require("../../controllers/flight-controller");
const AirportController = require("../../controllers/airport-controller");

const router = express.Router();

router.post("/city", cityController.createCity);
router.delete("/city/:id", cityController.deleteCity);
router.get("/city/:id", cityController.getCity);
router.patch("/city/:id", cityController.updateCity);
router.get("/city", cityController.getAllCity);

router.post("/flight", flightController.createFlight);
router.get("/flight", flightController.getAllFlight);

router.post("/airport", AirportController.createAirport);

module.exports = router;