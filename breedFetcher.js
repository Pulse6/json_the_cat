const request = require('request');
// const breed = process.argv[2];

// const callback = function (url) {
//   request(url, (error, response, body) => {
//     if (error) {
//       throw error;
//     }
//     const data = JSON.parse(body);
//     const breed = data[0];
//     if (breed) {
//       const desc = breed.description;
//     } else {
//       throw error;
//     }
//   })
// }

const fetchBreedDescription = function(breed, callback) {
  const url = `https://api.thecatapi.com/v1/breeds/search?q=${breed}`;
  request(url, (error, response, body) => {
    if (error) {
      callback(true, error);
    }
    const data = JSON.parse(body);
    const breed = data[0];
    if (breed) {
      // const desc = breed.description;
      return callback(error, breed.description);
    } else {
      return callback(`Cant Find This Breed`);
    }
  });
};



// fetchBreedDescription(breed, cb)

module.exports = { fetchBreedDescription };