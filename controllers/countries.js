const mongodb = require('../data/database');
const ObjectId = require('mongodb').ObjectId;

const getAll = async (req, res) => {
    //#swagger.tags=['Counrties']
    const result = await mongodb.getDatabase().db().collection('countries').find();
    result.toArray().then((countries) => {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(countries);
    });
};

const getSingle = async (req, res) => {
    //#swagger.tags=['Countries']
    const countryID = new ObjectId(req.params.id);
    const result = await mongodb.getDatabase().db().collection('countries').find({ _id: countryID });
    result.toArray().then((countries) => {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(countries[0]);
    });
};

const createCountry = async (req, res) => {
    //#swagger.tags=['Countries']
    const country = {
        name: req.body.name,
        capitol: req.body.capitol,
        population: req.body.population,
        language: req.body.language
    };
    const response = await mongodb.getDatabase().db().collection('countries').insertOne(country);
    if (response.acknowledged) {
        res.status(204).send();
    } else {
        res.status(500).json(response.error ||  'Some error occurred while creating the country.');
    }
};

const updateCountry = async (req, res) => {
    //#swagger.tags=['Countries']
    const countryID =  new ObjectId(req.params.id);
    const country = {
        name: req.body.name,
        capitol: req.body.capitol,
        population: req.body.population,
        language: req.body.language
    }
    const response = await mongodb.getDatabase().db().collection('countries').replaceOne({ _id: countryID}, country);
    if (response.modifiedCount > 0) {
        res.status(204).send();
    } else {
        res.status(500).json(response.error ||  'Some error occurred while updating the country.');
    }
};

const deleteCountry = async (req, res) => {
    //#swagger.tags=['Countries']
    const countryID =  new ObjectId(req.params.id);
    const response = await mongodb.getDatabase().db().collection('countries').deleteOne({ _id: countryID});
    if (response.deletedCount > 0) {
        res.status(204).send();
    } else {
        res.status(500).json(response.error ||  'Some error occurred while deleting the country.');
    }
};

module.exports = {
    getAll,
    getSingle,
    createCountry,
    updateCountry,
    deleteCountry
}