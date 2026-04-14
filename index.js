const express = require("express");
const db = require("./utils/dbConnection");
const busRoute = require("./routes/busRoute");
const userRoute = require("./routes/userRoute");
const app = express();
app.use(express.json());

const port = process.env.PORT || 3000;

app.use("/",busRoute);
app.use("/",userRoute);

app.listen(port,()=>{
 console.log("Server is running at",port);
})