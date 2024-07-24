const express = require('express');
const router = express.Router();

const citiesController = require('../controllers/cities');

router.get('/', citiesController.getAll);
router.get('/:id', citiesController.getSingle);

router.post('/', citiesController.createCity); //create
router.put('/:id', citiesController.updateCity); //update
router.delete('/:id', citiesController.deleteCity); //delete

module.exports = router;