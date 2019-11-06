import axios from 'axios';

const baseUrl = "https://api.edamam.com/search";
const appId = "a3543cf9";
const appKey = "31b3c2fade76d6828b674bdd57388131	—";

//TODO: Ask Jordan how to do this smarter
function buildRequestUrl(searchTerm) {
  var url = baseUrl;
  url += "?q=" + searchTerm;
  url += "&app_id=" + appId;
  url += "&app_key" + appKey

  return url;
}

//TODO: Ask Jordan how to get around CORS
export default function generateEdamamProvider(searchTerm) {
  var data = [];
  axios.get(buildRequestUrl(searchTerm), {
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  })
    .then(res => {
      console.log(res);
    })

  return data;
}