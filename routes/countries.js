const express = require('express');
const router = express.Router();

const countriesController = require('../controllers/countries');

router.get('/', countriesController.getAll);
router.get('/:id', countriesController.getSingle);

router.post('/', countriesController.createCountry); //create
router.put('/:id', countriesController.updateCountry); //update
router.delete('/:id', countriesController.deleteCountry); //delete

module.exports = router;