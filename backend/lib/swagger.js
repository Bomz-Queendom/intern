//swagger
const swaggerJsDoc = require('swagger-jsdoc');
const options = require('../config/swaggerDoc.json');
const swaggerDoc = swaggerJsDoc(options);

module.exports = swaggerDoc;