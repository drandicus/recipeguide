const express = require('express');
const bodyParser = require('body-parser');
const pino = require('express-pino-logger')();

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(pino);


const providerData = require('./dataproviders/Providers');
//Use for testing only
const testData = require('./dataproviders/TestDataProvider');

app.get('/api/search', (req, res) => {
  const searchTerm = req.query.query;
  var data = providerData.generateData(searchTerm);
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify({data: data}));
})

app.get('/api/test', (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify({data: testData.generateTestData()}));
})

app.listen(3001, () =>
  console.log('Express server is running on localhost:3001')
);