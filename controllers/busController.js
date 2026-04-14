const db = require("../utils/dbConnection");

const addBusDetails = (req,res) =>{
 const {bus_number,total_seats,available_seats} = req.body;
 const addBus =`insert into Buses(busNumber,totalSeats,availableSeats)
 values(?,?,?);
 `
 db.execute(addBus,[bus_number,total_seats,available_seats],(err)=>{
 if(err){
  res.status(500).send(err.message);
  db.end();
  return;
 }
 res.status(200).send("Bus details added!");
 console.log("Bus details added!");
 })
}
const getBusDetails = (req,res) =>{
  const {seats} = req.params;
  const getAllBuses =`select * from Buses where availableSeats > ? `;
  db.execute(getAllBuses,[seats],(err,result)=>{
    if(err){
      res.status(500).send(err.message);
      db.end()
      return;
    }
    if(result.affectedRows === 0){
      res.status(404).send("Record not found!");
      return;
    }
    res.send(result)
  })
}

module.exports ={addBusDetails,getBusDetails};