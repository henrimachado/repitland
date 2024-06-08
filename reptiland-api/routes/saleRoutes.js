const express = require('express');
const router = express.Router();
const Sale = require('../model/Sale');

const saleMethods = new Sale();

router.get('/', (req, res) => saleMethods.getSales(res));

router.get('/:id', (req, res) => saleMethods.getSaleById(req, res));

router.post('/', (req, res) => saleMethods.createSale(req, res));

router.delete('/:id', (req, res) => saleMethods.deleteSaleById(req, res));

router.patch('/:id', (req, res) => saleMethods.updateSale(req, res));

module.exports = router;
