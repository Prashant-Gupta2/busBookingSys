const db = require("../utils/dbConnection");
const Users = require("../models/users");

const addUserDetails = async(req,res) =>{
  try{
    const {name,email} = req.body;
     const user = await Users.create({
      name,
      email
    });

    return res.status(201).json({
      message: "User created successfully",
      data: user
    });

  } catch (err) {
    console.error(err);
    return res.status(500).json({
      message: "Internal Server Error"
    });
  }
}

const getUserDetails = async (req,res) =>{
  try {
    const users = await Users.findAll();

    if (!users || users.length === 0) {
      return res.status(404).json({
        message: "No users found",
        data: []
      });
    }
    return res.status(200).json({
      message: "Users fetched successfully",
      count: users.length,
      data: users
    });
  }
  catch(err){
    console.error(err)
    return res.status(500).json({
      message:"Internal server Error"
    })
  }
}
module.exports = {getUserDetails,addUserDetails};