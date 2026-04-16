const { DataTypes } = require("sequelize");
const sequelize = require("../utils/dbConnection");

const Payments = sequelize.define("Payments",{
  payment_id:{
          type:DataTypes.INTEGER,
          autoIncrement:true,
          primaryKey:true
  },
  booking_id:{
          type:DataTypes.INTEGER,
          allowNull:true
  },
  amountPaid:{
          type:DataTypes.INTEGER,
          allowNull:true
  },
  PaymentStatus:{
    type:DataTypes.ENUM('pending','completed','failed'),
    allowNull:false,
    defaultValue:'pending'
  }
})
module.exports = Payments