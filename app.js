const express = require("express");
const { routerCar } = require("./routes/car.routes");
const { globalErrorHandler } = require("./controllers/error.controller");
const app = express();

app.use(express.json());
app.use("/cars", routerCar);

app.use(globalErrorHandler);

module.exports = { app };
