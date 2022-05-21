const sqlite = require('sqlite3').verbose();

const db = new sqlite.Database('C:\\Users\\mamad\\Downloads\\RNANet.db', (err) => {
  if (err) {
    console.error(err.message);
  }
  console.log('Connected to the database.');
});

module.exports = db;
