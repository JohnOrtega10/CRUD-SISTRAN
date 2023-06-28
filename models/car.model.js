const { sequelize, DataTypes } = require("../utils/database");

const Car = sequelize.define("car", {
  id: {
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
    type: DataTypes.INTEGER,
  },

  brand: {
    allowNull: false,
    type: DataTypes.STRING,
  },

  model: {
    allowNull: false,
    type: DataTypes.INTEGER,
    validate: {
      isNumeric: true,
    },
  },

  date_purchase: {
    allowNull: false,
    type: DataTypes.DATE,
  },

  status: {
    defaultValue: "active",
    type: DataTypes.STRING,
  },
});

module.exports = { Car };
