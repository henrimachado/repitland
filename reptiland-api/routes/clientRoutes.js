const express = require('express');
const router = express.Router();
const CadCliente = require('../model/Client');

const clientMethods = new CadCliente();

router.get('/', (req, res) => clientMethods.getClient(res));

router.get('/:id', (req, res) => clientMethods.getClientById(req, res));

router.post('/', (req, res) => clientMethods.createClient(req, res));

router.delete('/:id', (req, res) => clientMethods.deleteClientById(req, res));

router.patch('/:id', (req, res) => clientMethods.updateClient(req, res));

module.exports = router;
