const express = require('express');
const router = express.Router();

const populationController = require('../controllers/population');
const { isAuthenticated } = require('../middleware/authenticate');

router.get('/', populationController.getAll);
router.get('/:id', populationController.getSingle);

router.post('/', isAuthenticated, populationController.createPopulation); //create
router.put('/:id', isAuthenticated, populationController.updatePopulation); //update
router.delete('/:id', isAuthenticated, populationController.deletePopulation); //delete

module.exports = router;