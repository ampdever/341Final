const express = require('express');
const router = express.Router();

const climatesController = require('../controllers/climates');
const { isAuthenticated } = require('../middleware/authenticate');

router.get('/', climatesController.getAll);
router.get('/:id', climatesController.getSingle);

router.post('/',  isAuthenticated, climatesController.createClimate); //create
router.put('/:id',  isAuthenticated, climatesController.updateClimate); //update
router.delete('/:id',  isAuthenticated, climatesController.deleteClimate); //delete

module.exports = router;