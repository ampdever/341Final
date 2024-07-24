const swaggerAutogen = require('swagger-autogen')();

const doc = {
    info: {
        title: 'Final API',
        description: 'Final API'
    },
    host: 'three41final-o1ao.onrender.com',
    schemes: ['https', 'http']
};

const outputFile = './swagger.json';
const endpointsFiles = ['./routes/index.js'];

swaggerAutogen(outputFile, endpointsFiles, doc);