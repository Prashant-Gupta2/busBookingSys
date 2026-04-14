const db = require("../utils/dbConnection");

const addUserDetails = (req,res) =>{
  const {name,email} = req.body;

  const addUsers = `insert into Users(name,email)
   values(?,?);
  `
  db.execute(addUsers,[name,email],(err)=>{
   if(err){
    res.status(500).send(err.message);
    db.end();
    return;
   }
   res.status(200).send("User Added Successfully!");
   console.log("User added!");
  })
}

const getUserDetails = (req,res) =>{
  const getAllUser =`select * from Users`;
  db.execute(getAllUser,(err,result)=>{
   if(err){
    res.status(500).send(err.message);
    db.end();
    return;
   }
   if(result.affectedRows === 0){
     res.status(404).send("Record not found!");
     return;
   }
   res.send(result);
  })
}
module.exports = {getUserDetails,addUserDetails};