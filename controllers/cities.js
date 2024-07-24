const mongodb = require('../data/database');
const ObjectId = require('mongodb').ObjectId;

const getAll = async (req, res) => {
    //#swagger.tags=['Cities']
    const result = await mongodb.getDatabase().db().collection('cities').find();
    result.toArray().then((cities) => {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(cities);
    });
};

const getSingle = async (req, res) => {
    //#swagger.tags=['Cities']
    const cityId = new ObjectId(req.params.id);
    const result = await mongodb.getDatabase().db().collection('cities').find({ _id: cityId });
    result.toArray().then((cities) => {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(cities[0]);
    });
};

const createCity = async (req, res) => {
    //#swagger.tags=['Cities']
    const city = {
        name: req.body.name,
        population: req.body.population,
        county: req.body.country
    };
    const response = await mongodb.getDatabase().db().collection('cities').insertOne(city);
    if (response.acknowledged) {
        res.status(204).send();
    } else {
        res.status(500).json(response.error ||  'Some error occurred while creating the city.');
    }
};

const updateCity = async (req, res) => {
    //#swagger.tags=['Cities']
    const cityId =  new ObjectId(req.params.id);
    const city = {
        name: req.body.name,
        population: req.body.population,
        country: req.body.country
    }
    const response = await mongodb.getDatabase().db().collection('cities').replaceOne({ _id: cityId}, city);
    if (response.modifiedCount > 0) {
        res.status(204).send();
    } else {
        res.status(500).json(response.error ||  'Some error occurred while updating the city.');
    }
};

const deleteCity = async (req, res) => {
    //#swagger.tags=['Cities']
    const cityId =  new ObjectId(req.params.id);
    const response = await mongodb.getDatabase().db().collection('cities').deleteOne({ _id: cityId});
    if (response.deletedCount > 0) {
        res.status(204).send();
    } else {
        res.status(500).json(response.error ||  'Some error occurred while deleting the city.');
    }
};

module.exports = {
    getAll,
    getSingle,
    createCity,
    updateCity,
    deleteCity
}