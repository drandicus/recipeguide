const axios = require('axios');

function buildRequestUrl(searchTerm) {
  const edamamURL = new URL(process.env.EDAMAM_API_URL);
  edamamURL.searchParams.append("app_id", process.env.EDAMAM_API_ID);
  edamamURL.searchParams.append("app_key", process.env.EDAMAM_API_KEY);
  edamamURL.searchParams.append("q", searchTerm);
  return edamamURL.href;
}
module.exports.generateData = async function(searchTerm) {
  const response = await axios.get(buildRequestUrl(searchTerm))
  return response;
}

