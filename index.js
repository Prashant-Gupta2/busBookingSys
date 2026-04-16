const express = require("express");
const db = require("./utils/dbConnection");
const busRoute = require("./routes/busRoute");
const userRoute = require("./routes/userRoute");
const sequelize = require("./utils/dbConnection");
require("./models/Bookings");
require("./models/Buses");
require("./models/Payments");
require("./models/users");
const app = express();
app.use(express.json());

const port = process.env.PORT || 3000;

app.use("/",busRoute);
app.use("/",userRoute);

db.sync()
.then(()=>{
   console.log("Table created!")     
   app.listen(port,()=>{
 console.log("Server is running at",port);
})        
}).catch((err)=>{
 console.log(err)
})
