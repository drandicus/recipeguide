const edamamProvider = require('./EdamamProvider');

function generateEdamamData(searchTerm) {
  return edamamProvider.generateEdamamData(searchTerm);
}

module.exports.generateData = function(searchTerm) {
  var data = generateEdamamData(searchTerm);

  //TODO: Add more providers

  return data;
}

