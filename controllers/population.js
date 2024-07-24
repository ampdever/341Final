const mongodb = require('../data/database');
const ObjectId = require('mongodb').ObjectId;

const getAll = async (req, res) => {
    //#swagger.tags=['Populations']
    const result = await mongodb.getDatabase().db().collection('population').find();
    result.toArray().then((population) => {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(population);
    });
};

const getSingle = async (req, res) => {
    //#swagger.tags=['Populations']
    const populationID = new ObjectId(req.params.id);
    const result = await mongodb.getDatabase().db().collection('population').find({ _id: populationID });
    result.toArray().then((population) => {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(population[0]);
    });
};

const createPopulation = async (req, res) => {
    //#swagger.tags=['Populations']
    const population = {
        country: req.body.country,
        year: req.body.year,
        totalPopulation: req.body.totalPopulation,
        populationGrowthRate: req.body.populationGrowthRate,
        birthRate: req.body.birthRate,
        deathRate: req.body.deathRate,
        lifeExpectancy: req.body.lifeExpectancy
    };
    const response = await mongodb.getDatabase().db().collection('population').insertOne(population);
    if (response.acknowledged) {
        res.status(204).send();
    } else {
        res.status(500).json(response.error ||  'Some error occurred while creating the population.');
    }
};

const updatePopulation = async (req, res) => {
    //#swagger.tags=['Populations']
    const populationID =  new ObjectId(req.params.id);
    const population = {
        country: req.body.country,
        year: req.body.year,
        totalPopulation: req.body.totalPopulation,
        populationGrowthRate: req.body.populationGrowthRate,
        birthRate: req.body.birthRate,
        deathRate: req.body.deathRate,
        lifeExpectancy: req.body.lifeExpectancy
    }
    const response = await mongodb.getDatabase().db().collection('population').replaceOne({ _id: populationID}, population);
    if (response.modifiedCount > 0) {
        res.status(204).send();
    } else {
        res.status(500).json(response.error ||  'Some error occurred while updating the population.');
    }
};

const deletePopulation = async (req, res) => {
    //#swagger.tags=['Populations']
    const populationID =  new ObjectId(req.params.id);
    const response = await mongodb.getDatabase().db().collection('population').deleteOne({ _id: populationID});
    if (response.deletedCount > 0) {
        res.status(204).send();
    } else {
        res.status(500).json(response.error ||  'Some error occurred while deleting the population.');
    }
};

module.exports = {
    getAll,
    getSingle,
    createPopulation,
    updatePopulation,
    deletePopulation
}