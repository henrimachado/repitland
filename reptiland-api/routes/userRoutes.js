const express = require('express');
const router = express.Router();
const CadUser = require('../model/User');

const userMethods = new CadUser();

router.get('/', (req, res) => userMethods.getUsers(res));

router.get('/:id', (req, res) => userMethods.getUserById(req, res));

router.post('/', (req, res) => userMethods.createUser(req, res));

router.delete('/:id', (req, res) => userMethods.deleteUserById(req, res));

router.patch('/:id', (req, res) => userMethods.updateUser(req, res));

module.exports = router;
