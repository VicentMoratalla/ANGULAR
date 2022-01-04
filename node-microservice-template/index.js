const config = require('config');
const debug = require('debug')('app:startup');
const express = require('express');
const swaggerUi = require('swagger-ui-express');
const openApiDocumentation = require('./service/api-especification/open-api-doc');
const log = require('./service/middleware/logger');
const helmet = require("helmet");
const morgan = require('morgan');
const pagehistories = require('./service/routes/pagehistories');
const app = express(); 
const dbconnection = require('./service/mongoose/db');

//logging configuration values
console.log('APP NAME: ', config.get('name'));
// console.log('APP mongoUri: ', config.get('mongo.mongoUri'));

dbconnection();

//middleware function that reads the request and parse the body into a json body
app.use(express.json());

//middleware function that reads the request and parse the body into keys and values that are encoded in key-value tuples
app.use(express.urlencoded());

//middleware function that helps you secure your Express apps by setting various HTTP headers
app.use(helmet());

//middleware function for HTTP request logger
if(app.get('env') === 'development'){
  app.use(morgan(log));
  debug('Morgan enabled...');
}

//middleware function server static content
app.use(express.static('public'));

//pagehistories routers
app.use('/pagehistories', pagehistories);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(openApiDocumentation));

const port = process.env.PORT || 3000;

app.listen(port, ()=>{
  console.log(`Listening in port ${port}!`);
});

module.exports = app;