const express = require('express');
const cors = require('cors');
const https = require('https');
const fs = require('fs');

const app = express();
require('dotenv').config();

app.use(
  cors({
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'], // Adicione DELETE aqui se não estiver presente
    allowedHeaders: ['Content-Type', 'Authorization'], // Adicione outros headers personalizados se necessário
  }),
);

const bodyParser = require('body-parser');
app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept',
  );
  next();
});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


//rotas importadas de router
app.use('/animal', require('./routes/animalRoutes'));
app.use('/client', require('./routes/clientRoutes'));
app.use('/userType', require('./routes/userTypeRoutes')); 
app.use('/user', require('./routes/userRoutes'));
app.use('/sale', require('./routes/saleRoutes'));
app.use('/login', require('./routes/loginRoutes'));

const server = https.createServer({
  key: fs.readFileSync('./ssl/server.key'),
  cert: fs.readFileSync('./ssl/server.crt'),
}, app);

server.listen(3000, '0.0.0.0', function () {
  const host = server.address().address;
  const port = server.address().port;
  console.log(`Servidor iniciado em https://localhost:${port}`);
});
