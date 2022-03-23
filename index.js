// import connection data
const db = require('./db/connection');

// set port for connection
const PORT = process.env.PORT || 3306;

// connect to database
db.connect(err => {
  if (err) throw err;
  console.log('workforce database connected');
});