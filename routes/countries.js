const express = require('express');
const router = express.Router();

const countriesController = require('../controllers/countries');
const { isAuthenticated } = require('../middleware/authenticate');

router.get('/', countriesController.getAll);
router.get('/:id', countriesController.getSingle);

router.post('/',  isAuthenticated, countriesController.createCountry); //create
router.put('/:id',  isAuthenticated, countriesController.updateCountry); //update
router.delete('/:id',  isAuthenticated, countriesController.deleteCountry); //delete

module.exports = router;