const { DataTypes } = require("sequelize");
const sequelize = require("../utils/dbConnection");

const Bookings = sequelize.define("Bookings",{
   booking_id:{
          type:DataTypes.INTEGER,
          autoIncrement:true,
          primaryKey:true
   },
   seatNumber:{
          type:DataTypes.INTEGER,
          allowNull:false
   },
    user_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: "users",
      key: "user_id"
    }
   }
})
module.exports = Bookings