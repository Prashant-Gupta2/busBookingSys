const users = require('./users');
const bookings = require('./Bookings');

//one to many
users.hasMany(bookings);
bookings.belongsTo(users);

module.exports = {users,bookings}