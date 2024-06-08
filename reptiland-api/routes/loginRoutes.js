const express = require('express');
const router = express.Router();
const Login = require('../model/Login');

const loginMethods = new Login();

router.post('/', (req, res) => loginMethods.getUserLogin(req, res));

module.exports = router;
