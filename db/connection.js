const mysql = require('mysql2');

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Onebigword',
  database: 'workforce'
});

module.exports = db;