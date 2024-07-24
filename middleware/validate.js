const validator = require('../helpers/validate');

const saveCountry = (req, res, next) => {
    const validationRule = {
        name: 'required|string',
        capitol: 'required|string',
        population: 'required|email',
        language: 'required|string'
    };
    validator(req.body, validationRule, {}, (err, status) => {
        if (!status) {
            res.status(412).send({
                success: false,
                message: 'Validation failed',
                data: err
            });
        } else {
            next();
        }
    });
};

const savePopulation = (req, res, next) => {
    const validationRule = {
        country: 'required|string',
        year: 'required|string',
        totalPopulation: 'required|string',
        populationGrowthRate: 'required|string',
        birthRate: 'required|string',
        deathRate: 'required|string',
        lifeExpectancy: 'required|string'
    };
    validator(req.body, validationRule, {}, (err, status) => {
        if (!status) {
            res.status(412).send({
                success: false,
                message: 'Validation failed',
                data: err
            });
        } else {
            next();
        }
    });
};

const saveCity = (req, res, next) => {
    const validationRule = {
        name: 'required|string',
        population: 'required|string',
        country: 'required|string'
    };
    validator(req.body, validationRule, {}, (err, status) => {
        if (!status) {
            res.status(412).send({
                success: false,
                message: 'Validation failed',
                data: err
            });
        } else {
            next();
        }
    });
};

const saveClimate = (req, res, next) => {
    const validationRule = {
        country: 'required|string',
        description: 'required|string',
        averageTemperature: 'required|email',
        rainfall: 'required|string'
    };
    validator(req.body, validationRule, {}, (err, status) => {
        if (!status) {
            res.status(412).send({
                success: false,
                message: 'Validation failed',
                data: err
            });
        } else {
            next();
        }
    });
};

module.exports = {
    saveCountry,
    savePopulation,
    saveCity,
    saveClimate
};