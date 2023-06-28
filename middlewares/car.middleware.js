const { Car } = require("../models/car.model");

const { AppError } = require("../utils/appError");
const { catchAsync } = require("../utils/catchAsync");

exports.carExists = catchAsync(async (req, res, next) => {
  const { id } = req.params;
  const car = await Car.findOne({
    where: { id, status: "active" },
  });
  if (!car) {
    return next(new AppError(404, "Car not found with given id"));
  }

  req.car = car;
  next();
});
