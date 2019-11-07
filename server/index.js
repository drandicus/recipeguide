const express = require('express');
const bodyParser = require('body-parser');
const pino = require('express-pino-logger')();
const cors = require('cors');
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(pino);
app.use(cors());

const providerData = require('./dataproviders/Providers');

app.listen(3001, () =>
  console.log('Express server is running on localhost:3001')
);

const asyncWrapper = (fn) => {
  return (req, res, next) => {
    Promise.resolve(fn(req, res, next)).catch(next);
  }
}

app.get('/api/search', asyncWrapper(async (req, res, _next) => {
  const searchTerm = req.query.query;
  var data = await providerData.generateData(searchTerm);

  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify(data.data));
}));

//------------------------------------------------------------------
//Use for testing only
const testData = require('./dataproviders/TestDataProvider');
const fs = require('fs');

app.get('/api/test', (_req, res, _next) => {
  let testJSON = testData.generateTestData();
  res.setHeader('Content-Type', 'application/json');
  res.send(testJSON);
});

app.get('/api/generatetestdata', asyncWrapper(async (_req, res, _next) => {
  const data = await providerData.generateData("taco");
  let stringData = JSON.stringify(data.data);
  fs.writeFileSync('data.json', stringData);

  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify(stringData));
}));