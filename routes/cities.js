const express = require('express');
const router = express.Router();

const citiesController = require('../controllers/cities');
const { isAuthenticated } = require('../middleware/authenticate');

router.get('/', citiesController.getAll);
router.get('/:id', citiesController.getSingle);

router.post('/',  isAuthenticated, citiesController.createCity); //create
router.put('/:id',  isAuthenticated, citiesController.updateCity); //update
router.delete('/:id',  isAuthenticated, citiesController.deleteCity); //delete

module.exports = router;