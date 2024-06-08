const express = require('express');
const router = express.Router();
const CadAnimal = require('../model/Animal');

const animaisMethods = new CadAnimal();

router.get('/', (req, res) => animaisMethods.getAnimais(res));

router.get('/:id', (req, res) => animaisMethods.getAnimalById(req, res));

router.post('/', (req, res) => animaisMethods.createAnimal(req, res));

router.delete('/:id', (req, res) => animaisMethods.deleteAnimalById(req, res));

router.patch('/:id', (req, res) => animaisMethods.updateAnimal(req, res));

module.exports = router;
