const { Car } = require("../models/car.model");
const { catchAsync } = require("../utils/catchAsync");

exports.addCar = catchAsync(async (req, res, next) => {
  const { brand, model, date_purchase } = req.body;

  const newCar = await Car.create({ brand, model, date_purchase });

  res.status(201).json({
    data: newCar,
  });
});

exports.getAllCars = catchAsync(async (req, res, next) => {
  const cars = await Car.findAll({ where: { status: "active" } });

  res.status(200).json({
    data: cars,
  });
});

exports.getCar = catchAsync(async (req, res, next) => {
  const { car } = req;
  res.status(200).json({
    data: car,
  });
});

exports.updateCar = catchAsync(async (req, res, next) => {
  const { car } = req;
  const { brand, model, date_purchase } = req.body;

  await car.update({ brand, model, date_purchase });

  res.status(204).json({ status: "success" });
});

exports.deleteCar = catchAsync(async (req, res, next) => {
  const { car } = req;
  await car.update({ status: "delected" });

  res.status(204).json({ status: "success" });
});
