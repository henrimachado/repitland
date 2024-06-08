const mysql = require('mysql2');
require('dotenv').config();
class Database {
  static connect() {
    const connection = mysql.createConnection({
      host: 'localhost',
      user: 'root',
      database: 'reptiland',
    });

    connection.connect();
    return connection;
  }
}
module.exports = Database;
