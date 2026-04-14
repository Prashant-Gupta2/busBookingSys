const express = require("express");
const mysql = require('mysql2');
const { env } = require("node:process");
const app = express();

const port = process.env.PORT || 3000;

const db = mysql.createConnection({
   host:'localhost',
   user:'root',
   password:'561413',
   database:'mydb'
});

db.connect((err)=>{
  if(err){
   console.log("Failed to connect database!",err);
   return;
  }
   console.log("Dababase connected!");

   const usersTable =`create table Users(user_id int AUTO_INCREMENT primary key,name varchar(50),email varchar(50))`;
   const busesTable =`create table Buses(bus_id int AUTO_INCREMENT primary key,busNumber int,totalSeats int, availableSeats int)`;
   const bookingsTable =`create table Bookings(booking_id int AUTO_INCREMENT primary key, seatNumber int)`;
    const paymentsTable = `
    CREATE TABLE IF NOT EXISTS Payments (
      payment_id INT AUTO_INCREMENT PRIMARY KEY,
      booking_id INT,
      amountPaid INT,
      paymentStatus ENUM('pending','completed','failed') DEFAULT 'pending',
      FOREIGN KEY (booking_id) REFERENCES Bookings(booking_id)
    )
  `;
   db.query(usersTable);
   db.query(busesTable);
   db.query(bookingsTable);
   db.query(paymentsTable);

})
app.listen(port,()=>{
 console.log("Server is running at",port);
})