const rp = require('request-promise');
const $ = require('cheerio');
//const potusParse = require('./potusParse');
const url = 'https://housing.com/rent/flats-for-rent-in-vijayanagar-mysore-P2hnfd8x2cuvh2kt4?f=eyJiYXNlIjpbeyJ0eXBlIjoiUE9MWSIsInV1aWQiOiI4YjFmYjNlNzE5NTU0OTY0YWYyNSIsImxhYmVsIjoiTXlzb3JlIENvbG9ueSJ9XSwibm9uQmFzZUNvdW50IjowLCJleHBlY3RlZFF1ZXJ5IjoibXlzb3JlIiwicXVlcnkiOiIgTXlzb3JlIENvbG9ueSwgQ2hlbWJ1ciIsInYiOjIsInMiOiJkIn0%3D&locality_info=false';


const scraper = function (url, res) {
  rp(url)
    .then(function (html) {
      //success!
      console.log($('.rli-price', html).text());
      res.send($('.rli-price', html).text());
    })
    .catch(function (err) {
      //handle error
    });
}
//potusScraper(url);
module.exports = scraper;