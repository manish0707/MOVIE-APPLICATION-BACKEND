const fetch = require('node-fetch');

exports.fetchApi = (url) => {
  return new Promise((resolve ,reject) => {
    fetch(url)
    .then(result => result.json())
    .then(resolve)
    .catch(reject);
  })
}