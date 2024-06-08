const Database = require('../database/reptilanddb');
const { format } = require('date-fns');

class CadClient {
  getClient(res) {
    this.dbConnection = Database.connect();
    this.dbConnection.beginTransaction();

    try {
      const sql = 'select * from client';
      this.dbConnection.query(sql, function (error, results, fields) {
        return res.status(200).send(results);
      });
      this.dbConnection.commit();
    } catch (error) {
      this.dbConnection.rollback();
      throw new Error('Não foi possivel concluir a transação', 500);
    } finally {
      this.dbConnection.end();
    }
  }

  getClientById(req, res) {
    const cpf = req.params.id; // Assumindo que o CPF é usado como ID

    this.dbConnection = Database.connect();
    this.dbConnection.beginTransaction();

    try {
      const sql = `SELECT * FROM client WHERE cpf = ?`; // Use o placeholder para o CPF
      this.dbConnection.query(sql, [cpf], function (error, results, fields) {
        if (error) {
          throw error;
        }

        return res.status(200).send(results[0]);
      });
      this.dbConnection.commit();
    } catch (error) {
      this.dbConnection.rollback();
      throw new Error('Erro com servidor', 500);
    } finally {
      this.dbConnection.end();
    }
  }

  createClient(req, res) {
    const { cpf, name, birthday, email, phone_number, avatar } = req.body;
    this.dbConnection = Database.connect();
    this.dbConnection.beginTransaction();

    try {
      const sql = `INSERT INTO client (cpf, name, birthday, email, phone_number, avatar) VALUES (?, ?, ?, ?, ?, ?)`;
      this.dbConnection.query(sql, [cpf, name, birthday, email, phone_number, avatar], function () {
        return res.status(200).send({ msg: 'Cliente cadastrado com sucesso' });
      });
      this.dbConnection.commit();
    } catch (error) {
      this.dbConnection.rollback();
      throw new Error('Erro com servidor', 500);
    } finally {
      this.dbConnection.end();
    }
  }

  deleteClientById(req, res) {
    this.dbConnection = Database.connect();
    const cpf = req.params.id; // Assumindo que o CPF é usado como ID

    this.dbConnection.beginTransaction();
    try {
      const sql = `DELETE FROM client WHERE cpf = ?`; // Use o placeholder para o CPF
      this.dbConnection.query(sql, [cpf], function () {
        return res.status(200).send({ msg: 'Cliente deletado com sucesso!' });
      });
      this.dbConnection.commit();
    } catch (error) {
      this.dbConnection.rollback();
      throw new Error('Erro com servidor', 500);
    } finally {
      this.dbConnection.end();
    }
  }

  updateClient(req, res) { 
    this.dbConnection = Database.connect();
    this.dbConnection.beginTransaction();
    const cpf = req.params.id; 
    const { name, birthday, email, phone_number, avatar } = req.body;

    try {
      const setStatementCollumns = [];
      const setStatementValues = [];

      if (name) {
        setStatementCollumns.push(`name = ?`);
        setStatementValues.push(name);
      }
      if (birthday) {
        setStatementCollumns.push(`birthday = ?`);
        setStatementValues.push(format(new Date(birthday), 'yyyy-MM-dd'));
      }

    if (email) {
      setStatementCollumns.push(`email = ?`);
      setStatementValues.push(email);
    }
    if (phone_number) {
      setStatementCollumns.push(`phone_number = ?`);
      setStatementValues.push(phone_number);
    }
    if (avatar) {
      setStatementCollumns.push(`avatar = ?`);
      setStatementValues.push(avatar);
    }

    if (setStatementCollumns.length === 0) {
      return res.status(400).send({ error: 'Nenhum dado válido para atualização' });
    }

    const sql = `UPDATE client SET ${setStatementCollumns.join(
      ',',
    )} where cpf = ?`; // Use o placeholder para o CPF

    console.log(sql);

    this.dbConnection.query(sql, [...setStatementValues, cpf], function (error, results) { // Passe o CPF no array de valores
      if (error) {
        throw error; 
      }

      if (results.affectedRows === 0) {
        return res.status(404).send({ error: 'Registro não encontrado ou não atualizado' });
      }

      return res.status(200).send({ msg: 'Registro do cliente atualizado com sucesso!' });
    });

    this.dbConnection.commit();
  } catch (error) {
    this.dbConnection.rollback();
    console.error(error);
    return res.status(500).send({ error: 'Erro no servidor' });
  } finally {
    this.dbConnection.end();
  }
}}


module.exports = CadClient;