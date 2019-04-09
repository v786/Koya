const rp = require('request-promise');
const $ = require('cheerio');
//const potusParse = require('./potusParse');
// const url = 'https://housing.com/rent/flats-for-rent-in-vijayanagar-mysore-P2hnfd8x2cuvh2kt4?f=eyJiYXNlIjpbeyJ0eXBlIjoiUE9MWSIsInV1aWQiOiI4YjFmYjNlNzE5NTU0OTY0YWYyNSIsImxhYmVsIjoiTXlzb3JlIENvbG9ueSJ9XSwibm9uQmFzZUNvdW50IjowLCJleHBlY3RlZFF1ZXJ5IjoibXlzb3JlIiwicXVlcnkiOiIgTXlzb3JlIENvbG9ueSwgQ2hlbWJ1ciIsInYiOjIsInMiOiJkIn0%3D&locality_info=false';


const scraperPrice = function (url, res) {
  rp(url)
    .then(function (html) {
      //success!
      const data = $('.rli-price', html);
      const count = data.length;
      console.log(data.text(), count);
      console.log(data[0].children[1].data);
      const priceData = [];
      const x = data.each(function (i, elem) {
        priceData[i] = $(this).text();
      });
      console.log(x);
      res.send(priceData);
    })
    .catch(function (err) {
      //handle error
    });
}
//potusScraper(url);
module.exports = scraperPrice;
/* 
const scraperInfo = function (url, res) {
  rp(url)
    .then(function (html) {
      //success!
      console.log($('.rli-info', html).text());
      res.send($('.rli-info', html).text());
    })
    .catch(function (err) {
      //handle error
    });
}
//potusScraper(url);
module.exports = scraperInfo;

const scraperAddress = function (url, res) {
  rp(url)
    .then(function (html) {
      //success!
      console.log($('.rli-address', html).text());
      res.send($('.rli-address', html).text());
    })
    .catch(function (err) {
      //handle error
    });
}
//potusScraper(url);
module.exports = scraperAddress; */