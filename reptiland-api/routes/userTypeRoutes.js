const express = require('express');
const router = express.Router();
const CadUserType = require('../model/UserType');

const userTypeMethods = new CadUserType();

router.get('/', (req, res) => userTypeMethods.getUserTypes(res));

module.exports = router;
