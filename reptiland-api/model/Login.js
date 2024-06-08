const Database = require('../database/reptilanddb');
const bcrypt = require('bcrypt');

class Login {
    async getUserLogin(req, res) {
      const { username, password } = req.body;
  
      this.dbConnection = Database.connect();
        
      
      
      try {
        const sql = `SELECT * FROM userreptiland WHERE username = ?`;
        this.dbConnection.query(sql, [username], async function (error, results, fields) {
          if (error) {
            throw error;
          }
  
          if (results.length === 0) {
            return res.status(404).send({ msg: 'Usuário não encontrado' });
          }
  
          const user = results[0];
          const passwordsMatch = await bcrypt.compare(password, user.password)
          
          if(!passwordsMatch){
            return res.status(401).send({ msg: 'Credenciais inválidas' });
          }
          
          const formatedUser = {
            cpf: user.cpf,
            username: user.username,
            user_type_id: user.user_type_id,
            name: user.name,
            phone_number: user.phone_number
          }
          
          return res.status(200).send(formatedUser);
    
        });
      } catch (error) {
        return res.status(500).send({ error: 'Erro no servidor' });
      } finally {
        this.dbConnection.end();
      }
    }
  }
  
  module.exports = Login;