const axios = require('axios');
const url = require('url');

function buildRequestUrl(searchTerm) {
  const edamamURL = new URL(process.env.EDAMAM_API_URL);
  edamamURL.searchParams.append("app_id", process.env.EDAMAM_API_ID);
  edamamURL.searchParams.append("app_key", process.env.EDAMAM_API_KEY);
  edamamURL.searchParams.append("q", searchTerm);
  return edamamURL.href;
}

//TODO: Ask Jordan how to get around CORS
module.exports.generateEdamamData = function(searchTerm) {
  var data = [];
  // axios.get(buildRequestUrl(searchTerm), {
  //   headers: {
  //     'Access-Control-Allow-Origin': '*',
  //   },
  // })
  //   .then(res => {
  //     console.log(res);
  //   })

  return data;
}