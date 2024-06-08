const mysql = require('mysql');
const Database = require('../database/reptilanddb');

class UserType {
  getUserTypes(res) {
    this.dbConnection = Database.connect();
    this.dbConnection.beginTransaction();
    try {
      const sql = 'select * from usertype';
      this.dbConnection.query(sql, function (error, results, fields) {
        return res.status(200).send(results);
      });
      this.dbConnection.commit();
    } catch (error) {
      this.dbConnection.rollback();
      throw new Error('Erro com servidor', 500);
    } finally {
      this.dbConnection.end();
    }
  }
}

module.exports = UserType;
