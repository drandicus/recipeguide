const fs = require('fs');

module.exports.generateTestData = function() {
    var text = fs.readFileSync(`${__dirname}/test/data.json`, 'utf8')
    console.log(text);
    return text;
}