const { es } = require('date-fns/locale');
const Database = require('../database/reptilanddb');
const { format } = require('date-fns');

class CadAnimal {
  getAnimais(res) {
    this.dbConnection = Database.connect();
    this.dbConnection.beginTransaction();

    try {
      const sql = 'select * from animal';
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

  getAnimalById(req, res) {
    const id = req.params.id;

  
    this.dbConnection = Database.connect();
    this.dbConnection.beginTransaction();
  
    try {
      const sql = `SELECT * FROM animal WHERE id = ?`;
      this.dbConnection.query(sql, [id], function (error, results, fields) {
        if (error) {
          throw error;
        }

        const resultado = results;

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

  createAnimal(req, res) {
    const { nome, especie, idade, preco, avatar } =  req.body;
    this.dbConnection = Database.connect();
    this.dbConnection.beginTransaction();

    try {
      const parameters = [nome, especie, idade, preco, avatar];

      const sql = `INSERT INTO animal (name, species, age, price, avatar) VALUES (?, ?, ?, ?, ?)`;

      this.dbConnection.query(sql, parameters, function () {
        return res.status(200).send({ msg: 'Animal cadastrado com sucesso' });
      });
      this.dbConnection.commit();
    } catch (error) {
      this.dbConnection.rollback();
      throw new Error('Erro com servidor', 500);
    } finally {
      this.dbConnection.end();
    }
  }

  deleteAnimalById(req, res) {
    this.dbConnection = Database.connect();
    const id = req.params.id;

    this.dbConnection.beginTransaction();
    try {
      const sql = `DELETE FROM animal where id = ?`;
      this.dbConnection.query(sql, [id], function () {
        return res.status(200).send({ msg: 'Animal deletado com sucesso!' });
      });
      this.dbConnection.commit();
    } catch (error) {
      this.dbConnection.rollback();
      throw new Error('Erro com servidor', 500);
    } finally {
      this.dbConnection.end();
    }
  }

  updateAnimal(req, res) {
    this.dbConnection = Database.connect();
    this.dbConnection.beginTransaction();
    const id = req.params.id;
    const { nome, especie, idade, preco, avatar } = req.body;
  
    try {
      if (!id) {
        return res.status(400).send({ error: 'ID do animal é obrigatório' });
      }
  
      if (nome && typeof nome !== 'string') {
        return res.status(400).send({ error: 'Nome deve ser uma string' });
      }
  
      if (especie && typeof especie !== 'string') {
        return res.status(400).send({ error: 'Espécie deve ser uma string' });
      }
  
      if (idade && typeof idade !== 'number') {
        return res.status(400).send({ error: 'Idade deve ser um número' });
      }
  
      if (preco && typeof preco !== 'number') {
        return res.status(400).send({ error: 'Preço deve ser um número' });
      }
  
      const setStatementCollumns = [];
      const setStatementValues = [];
  
      if (nome) {
        setStatementCollumns.push(`name = ?`);
        setStatementValues.push(nome);
      }
      if (especie) {
        setStatementCollumns.push(`species = ?`);
        setStatementValues.push(especie);
      }
      if (idade) {
        setStatementCollumns.push(`age = ?`);
        setStatementValues.push(idade);
      }
      if (preco) {
        setStatementCollumns.push(`price = ?`);
        setStatementValues.push(preco);
      }
      if (avatar) {
        setStatementCollumns.push(`avatar = ?`);
        setStatementValues.push(avatar);
      }
  
      if (setStatementCollumns.length === 0) {
        return res.status(400).send({ error: 'Nenhum dado válido para atualização' });
      }
  
      const sql = `UPDATE animal SET ${setStatementCollumns.join(
        ',',
      )} where id = ${id};`;
  
  
      this.dbConnection.query(sql, setStatementValues, function (error, results) {
        if (error) {
          throw error; 
        }
  
        if (results.affectedRows === 0) {
          return res.status(404).send({ error: 'Registro não encontrado ou não atualizado' });
        }
  
        return res.status(200).send({ msg: 'Registro do animal atualizado com sucesso!' });
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

module.exports = CadAnimal;
