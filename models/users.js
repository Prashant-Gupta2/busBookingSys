const { DataTypes } = require("sequelize");
const sequelize = require("../utils/dbConnection");

const Users = sequelize.define("Users", {
  user_id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: true
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique:true
  }
});

module.exports = Users;