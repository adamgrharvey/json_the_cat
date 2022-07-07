const request = require('request');
const apiKey = "2fbe7f12-b537-4040-a2a2-5ee222655364";
const args = process.argv.slice(2);

let options = { method: 'GET',
  url: `https://api.thecatapi.com/v1/breeds/search?q=${args[0]}`,
  headers: { 'x-api-key': apiKey } };

request(options, function(error, response, body) {
  if (error) throw new Error(error);

  const resultObj = JSON.parse(body);
  if (resultObj[0] === undefined) {
    console.log();
    throw new Error("Breed not found. Exiting...");
    //exit();
  }
  console.log(resultObj[0].description);
});
