const Database = require('../database/reptilanddb');
const { format } = require('date-fns');
const { MyError } = require('../MyErrors');
const bcrypt = require('bcrypt');
const { th } = require('date-fns/locale');

class User {
  getUsers(res) {
    this.dbConnection = Database.connect();
    this.dbConnection.beginTransaction();

    try {
      const sql = 'select cpf, username, name, user_type_id, phone_number from userreptiland';
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

    getUserById(req, res) {
    const id = req.params.id;

    this.dbConnection = Database.connect();
    this.dbConnection.beginTransaction();
  
    try {
      const sql = `select cpf, username, name, user_type_id, phone_number from userreptiland WHERE cpf = ?`;
      this.dbConnection.query(sql, [id], function (error, results, fields) {
        if (error) {
          throw error;
        }

        return res.status(200).json(results[0]);
      });
      this.dbConnection.commit();
    } catch (error) {
      this.dbConnection.rollback();
      throw new Error('Erro com servidor', 500);
    } finally {
      this.dbConnection.end();
    }
  }

  async createUser(req, res) {
    const { cpf, username, password, userTypeId, name, phoneNumber } =  req.body;
    this.dbConnection = Database.connect();
    this.dbConnection.beginTransaction();

    try {
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]).{8,}$/;

        if (!cpf) {
            throw new MyError('CPF é obrigatório.', 400);
        }
        if (typeof cpf !== 'number' || cpf.toString().length !== 11) {
            throw new MyError('CPF é inválido.', 400);
        }
    
        if (!username) {
            throw new MyError('Nome de usuário é obrigatório.', 400);
        }
    
        if (!password) {
            throw new MyError('Senha é obrigatória.', 400);
        }

        if (!passwordRegex.test(password)) {
            throw new MyError('A senha deve ter pelo menos 8 caracteres, incluindo pelo menos uma letra maiúscula, uma letra minúscula e um caractere especial.', 400);
        }
        if(typeof userTypeId !== 'number' ) {
            throw new MyError('', 400);
        }
        if (!userTypeId) {
            throw new MyError('Tipo de usuário é obrigatório.', 400);
        }

        if (!name) {
            throw new MyError('Nome é obrigatório.', 400);
        }
    
        if (!phoneNumber) {
            throw new MyError('Numero é obrigatório.', 400);
        }

        const salt = 10;
        
        const hashedSenha = await bcrypt.hash(password, salt); 

        const sql = `INSERT INTO userreptiland (cpf, username, password, user_type_id, name, phone_number) VALUES (?, ?, ?, ?, ?, ?)`;

        this.dbConnection.query(sql, [cpf, username, hashedSenha, userTypeId, name, phoneNumber], function () {
            return res.status(201).send({ msg: 'Usuário cadastrado com sucesso' });
          });

        this.dbConnection.commit();
      
    } catch (error) {
        this.dbConnection.rollback();
        return res.status(error.code || 500).send({ msg: error.message})
    } finally {
      this.dbConnection.end();
    }
  }

  deleteUserById(req, res) {
    this.dbConnection = Database.connect();
    const id = req.params.id;
    console.log(id);

    this.dbConnection.beginTransaction();
    try {
      const sql = `DELETE FROM userreptiland where cpf = ?`;
      this.dbConnection.query(sql, [id], function () {
        return res.status(200).send({ msg: 'Usuário deletado com sucesso!' });
      });
      this.dbConnection.commit();
    } catch (error) {
      this.dbConnection.rollback();
      throw new Error('Erro com servidor', 500);
    } finally {
      this.dbConnection.end();
    }
  }

  async getUser(userid, dbtransaction ){
    
    return new Promise((resolve, reject) => {
      try {
        const sql = `SELECT * FROM userreptiland WHERE cpf = ?`;
        dbtransaction.query(sql, [userid], function (error, results, fields) {
          if (error) {
            throw error;
          }
  
          return resolve(results[0]);
        });

      } catch (error) {
        throw new Error('Falha ao buscar usuário', 500);
      } 
    });
  
  }

  async updateUser(req, res) {
    this.dbConnection = Database.connect();
    this.dbConnection.beginTransaction();
    const id = req.params.id;
    const { cpf, newPassword, confirmNewPassword, oldPassword, username, userTypeId, name, phoneNumber } = req.body;
  
    try {
        const passWordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]).{8,}$/;

        if (!id) {
            throw new MyError('Id é obrigatório.', 400);
        }
        
      const setStatementCollumns = [];
      const setStatementValues = [];
  
      if (newPassword) {

        if (!passWordRegex.test(newPassword)) {
            throw new MyError('A nova senha deve ter pelo menos 8 caracteres, incluindo pelo menos uma letra maiúscula, uma letra minúscula e um caractere especial.', 400);
        }

        const user =  await this.getUser(id, this.dbConnection);

        if(!confirmNewPassword){
            throw new MyError('Confirmação de senha é obrigatória.', 400);
        }
        if(newPassword !== confirmNewPassword){
            throw new MyError('As senhas não conferem.', 400);
        }
        if(!oldPassword){
            throw new MyError('Senha antiga é obrigatória.', 400);
        }

        const match = await bcrypt.compare(oldPassword, user.password);

        if(!match){
            throw new MyError('Dados incorretos.', 400);
        }
    
        setStatementCollumns.push(`password = ?`);
        setStatementValues.push(await bcrypt.hash(newPassword, 10));
      }

      if (cpf) {
        setStatementCollumns.push(`cpf = ?`);
        setStatementValues.push(cpf);
      }
      if (username) {
        setStatementCollumns.push(`username = ?`);
        setStatementValues.push(username);
      }
      if (userTypeId) {
        setStatementCollumns.push(`user_type_id = ?`);
        setStatementValues.push(userTypeId);
      }
      if (name) {
        setStatementCollumns.push(`name = ?`);
        setStatementValues.push(name);
      }
      if (phoneNumber) {
        setStatementCollumns.push(`phone_number = ?`);
        setStatementValues.push(phoneNumber);
      }
  
      if (setStatementCollumns.length === 0) {
        return res.status(400).send({ error: 'Nenhum dado válido para atualização' });
      }
  
      const sql = `UPDATE userreptiland SET ${setStatementCollumns.join(
        ',',
      )} where cpf = ${id};`;
  
  
      this.dbConnection.query(sql, setStatementValues, function (error, results) {
        if (error) {
          throw error; 
        }
  
        if (results.affectedRows === 0) {
            throw new MyError('Registro não encontrado ou não atualizado', 404);
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

module.exports = User;
