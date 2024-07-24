const mongodb = require('../data/database');
const ObjectId = require('mongodb').ObjectId;

const getAll = async (req, res) => {
    //#swagger.tags=['Climates']
    const result = await mongodb.getDatabase().db().collection('climates').find();
    result.toArray().then((climates) => {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(climates);
    });
};

const getSingle = async (req, res) => {
    //#swagger.tags=['Climates']
    const climateID = new ObjectId(req.params.id);
    const result = await mongodb.getDatabase().db().collection('climates').find({ _id: climateID });
    result.toArray().then((climates) => {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(climates[0]);
    });
};

const createClimate = async (req, res) => {
    //#swagger.tags=['Climates']
    const climate = {
        country: req.body.country,
        description: req.body.description,
        averageTemperature: req.body.averageTemperature,
        rainfall: req.body.rainfall
    };
    const response = await mongodb.getDatabase().db().collection('climates').insertOne(climate);
    if (response.acknowledged) {
        res.status(204).send();
    } else {
        res.status(500).json(response.error ||  'Some error occurred while creating the climate.');
    }
};

const updateClimate = async (req, res) => {
    //#swagger.tags=['Climates']
    const climateID =  new ObjectId(req.params.id);
    const climate = {
        country: req.body.country,
        description: req.body.description,
        averageTemperature: req.body.averageTemperature,
        rainfall: req.body.rainfall
    }
    const response = await mongodb.getDatabase().db().collection('climates').replaceOne({ _id: climateID}, climate);
    if (response.modifiedCount > 0) {
        res.status(204).send();
    } else {
        res.status(500).json(response.error ||  'Some error occurred while updating the climate.');
    }
};

const deleteClimate = async (req, res) => {
    //#swagger.tags=['Climates']
    const climateID =  new ObjectId(req.params.id);
    const response = await mongodb.getDatabase().db().collection('climates').deleteOne({ _id: climateID});
    if (response.deletedCount > 0) {
        res.status(204).send();
    } else {
        res.status(500).json(response.error ||  'Some error occurred while deleting the climate.');
    }
};

module.exports = {
    getAll,
    getSingle,
    createClimate,
    updateClimate,
    deleteClimate
}