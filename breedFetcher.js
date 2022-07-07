const request = require('request');
const apiKey = "2fbe7f12-b537-4040-a2a2-5ee222655364";

const fetchBreedDescription = function(breedName, callback) {
  let options = { method: 'GET',
    url: `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`,
    headers: { 'x-api-key': apiKey } };

  request(options, function(error, response, body) {
    if (error) {
      throw new Error(error);
    }
    
    const resultObj = JSON.parse(body);
    if (resultObj[0] === undefined) {
      error = "No results found.";
      callback(error, null);
    } else {
      callback(null, resultObj[0].description);
    }
    
  });
};

module.exports = {
  fetchBreedDescription
};