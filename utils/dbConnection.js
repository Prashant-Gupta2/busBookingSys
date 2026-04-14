const mysql = require('mysql2');

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '561413',
  database: 'mydb'
});

db.connect((err) => {
  if (err) {
    console.log("Failed to connect database!", err);
    return;
  }

  console.log("Database connected!");

  const usersTable = `
    CREATE TABLE IF NOT EXISTS Users (
      user_id INT AUTO_INCREMENT PRIMARY KEY,
      name VARCHAR(50),
      email VARCHAR(50)
    )
  `;

  const busesTable = `
    CREATE TABLE IF NOT EXISTS Buses (
      bus_id INT AUTO_INCREMENT PRIMARY KEY,
      busNumber INT,
      totalSeats INT,
      availableSeats INT
    )
  `;

  const bookingsTable = `
    CREATE TABLE IF NOT EXISTS Bookings (
      booking_id INT AUTO_INCREMENT PRIMARY KEY,
      seatNumber INT
    )
  `;

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
});

module.exports = db;