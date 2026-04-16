const db = require("../utils/dbConnection");
const Buses = require("../models/Buses");
const {Op} = require("sequelize")

const addBusDetails = async (req, res) => {
  try {
    const { busNumber, totalSeats, availableSeats } = req.body;

    const buses = await Buses.create({
      busNumber,
      totalSeats,
      availableSeats
    });

    return res.status(201).json({
      message: "Bus details Added",
      data: buses
    });

  } catch (err) {
    console.error(err);
    return res.status(500).json({
      message: "Internal server error"
    });
  }
};
const getBusDetails = async (req, res) => {
  try {
    const requiredSeats = parseInt(req.params.seats);

    const buses = await Buses.findAll({
      where: {
        availableSeats: {
         [Op.gte]: requiredSeats // available > required
        }
      }
    });
      if (!buses) {
      return res.status(404).json({
        message: "No buses available"
      });
    }
    return res.status(200).json({
      message: "Buses fetched successfully!",
      count: buses.length,
      data: buses
    });

  } catch (err) {
    console.error(err);
    return res.status(500).json({
      message: "Internal server error"
    });
  }
};

module.exports ={addBusDetails,getBusDetails};