const express = require("express");
const router = express.Router();

const {
  addCar,
  deleteCar,
  getAllCars,
  updateCar,
  getCar,
} = require("../controllers/car.controller");
const { carExists } = require("../middlewares/car.middleware");

router.get("/", getAllCars);
router.post("/", addCar);
router.get("/:id", carExists, getCar);
router.patch("/:id", carExists, updateCar);
router.delete("/:id", carExists, deleteCar);

module.exports = { routerCar: router };
