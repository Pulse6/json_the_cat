const request = require('request');
const breed = process.argv[2];
const url = `https://api.thecatapi.com/v1/breeds/search?q=${breed}`;

request(url, (error, response, body) => {
  if (error) {
    return console.log(`breed ${breed} is not found`);
  }
  const data = JSON.parse(body);
  const breed = data[0];
  // console.log(data[0]);
  // console.log(data[0].description);
  // console.log(typeof data);
  if (breed) {
    console.log(breed.description);
  } else {
    console.log(`Failed to find breed ${breed}`);
  }
});
