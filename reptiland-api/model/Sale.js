const Database = require('../database/reptilanddb');

class Sale {
  getSales(res) {
    this.dbConnection = Database.connect();
    this.dbConnection.beginTransaction();

    try {
      const sql = 'select * from sale';
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

  getSaleById(req, res) {
    const id = req.params.id;

    this.dbConnection = Database.connect();
    this.dbConnection.beginTransaction();

    try {
      const sql = `SELECT * FROM sale WHERE id = ?`;
      this.dbConnection.query(sql, [id], function (error, results, fields) {
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

  createSale(req, res) {
    const { animal_id, client_id, price, discount, created_by, sold_by } = req.body;
    this.dbConnection = Database.connect();
    this.dbConnection.beginTransaction();

    try {
      const sql = `INSERT INTO sale (animal_id, client_id, price, discount, created_by, sold_by) VALUES (?, ?, ?, ?, ?, ?)`;
      this.dbConnection.query(sql, [animal_id, client_id, price, discount, created_by, sold_by], function () {
        return res.status(201).send({ msg: 'Venda cadastrada com sucesso' });
      });
      this.dbConnection.commit();
    } catch (error) {
      this.dbConnection.rollback();
      throw new Error('Erro com servidor', 500);
    } finally {
      this.dbConnection.end();
    }
  }

  deleteSaleById(req, res) {
    this.dbConnection = Database.connect();
    const id = req.params.id;

    this.dbConnection.beginTransaction();
    try {
      const sql = `DELETE FROM sale WHERE id = ?`;
      this.dbConnection.query(sql, [id], function () {
        return res.status(200).send({ msg: 'Venda deletada com sucesso!' });
      });
      this.dbConnection.commit();
    } catch (error) {
      this.dbConnection.rollback();
      throw new Error('Erro com servidor', 500);
    } finally {
      this.dbConnection.end();
    }
  }

  updateSale(req, res) { 
    this.dbConnection = Database.connect();
    this.dbConnection.beginTransaction();
    const id = req.params.id; 
    const { animal_id, client_id, price, discount, created_by, sold_by } = req.body;

    try {
      const setStatementCollumns = [];
      const setStatementValues = [];

      if (animal_id) {
        setStatementCollumns.push(`animal_id = ?`);
        setStatementValues.push(animal_id);
      }
      if (client_id) {
        setStatementCollumns.push(`client_id = ?`);
        setStatementValues.push(client_id);
      }
      if (price) {
        setStatementCollumns.push(`price = ?`);
        setStatementValues.push(price);
      }
      if (discount) {
        setStatementCollumns.push(`discount = ?`);
        setStatementValues.push(discount);
      }
      if (created_by) {
        setStatementCollumns.push(`created_by = ?`);
        setStatementValues.push(created_by);
      }
      if (sold_by) {
        setStatementCollumns.push(`sold_by = ?`);
        setStatementValues.push(sold_by);
      }

      if (setStatementCollumns.length === 0) {
        return res.status(400).send({ error: 'Nenhum dado válido para atualização' });
      }

      const sql = `UPDATE sale SET ${setStatementCollumns.join(
        ',',
      )} where id = ?`;

      this.dbConnection.query(sql, [...setStatementValues, id], function (error, results) { 
        if (error) {
          throw error; 
        }

        if (results.affectedRows === 0) {
          return res.status(404).send({ error: 'Registro não encontrado ou não atualizado' });
        }

        return res.status(200).send({ msg: 'Registro da venda atualizado com sucesso!' });
      });
      this.dbConnection.commit();
    } catch (error) {
      this.dbConnection.rollback();
      console.error(error);
      return res.status(500).send({ error: 'Erro no servidor' });
    } finally {
      this.dbConnection.end();
    }
  }
}

module.exports = Sale;
     