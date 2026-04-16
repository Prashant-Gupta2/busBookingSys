const sequelize = require("../utils/dbConnection");
const { DataTypes } = require("sequelize");

const Buses = sequelize.define("Buses", {
  bus_id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  busNumber: {
    type: DataTypes.STRING,
    allowNull: false
  },
  totalSeats: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  availableSeats: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
});

module.exports = Buses;