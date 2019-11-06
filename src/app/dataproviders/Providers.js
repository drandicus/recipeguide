import generateEdamamProvider from './EdamamProvider';

const providers = [
  generateEdamamProvider
];

export default function generateData(searchTerm) {
  var data = [];
  
  for (var i=0; i<providers.length; i++) {
    var providerData = providers[i].call(this, searchTerm);
    
    //TODO: Ask Jordan why the fuck doesn't data.concat(providerData) just work
    if (data.length === 0) {
      data = providerData
    } else {
      data.concat(providerData)
    }
  }

  console.log(data)
  return data;
}