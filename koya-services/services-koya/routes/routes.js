var express = require('express');

var router = express.Router();
var path = require('path');

var scrapper = require('../scraper');

var dbcon = require("../db_repos");
/* GET home page. */
router.get('/', function (req, res, next) {
    res.sendFile(path.join(__dirname + '/../index.html'));
});


router.get('/fetchrecords', function (req, res) {
    var num = parseInt(req.query.number);
    dbcon.getThings(num, res);
});
router.get('/cost-list', function (req, res) {
    const area = req.query.area;
    const url = 'https://housing.com/rent/flats-for-rent-in-' + area + '-mysore-P2hnfd8x2cuvh2kt4?f=eyJiYXNlIjpbeyJ0eXBlIjoiUE9MWSIsInV1aWQiOiI4YjFmYjNlNzE5NTU0OTY0YWYyNSIsImxhYmVsIjoiTXlzb3JlIENvbG9ueSJ9XSwibm9uQmFzZUNvdW50IjowLCJleHBlY3RlZFF1ZXJ5IjoibXlzb3JlIiwicXVlcnkiOiIgTXlzb3JlIENvbG9ueSwgQ2hlbWJ1ciIsInYiOjIsInMiOiJkIn0%3D&locality_info=false';
    obj = scrapper(url, res);
});
router.get('/about', function (req, res) {
    res.set('Content-Type', 'text/plain');
    res.send('Jahangir and Munish');
});
router.post('/login', function (req, res) {
    console.log('Request for log in!');
    dbcon.login(req, res);
});
router.get('/users', function (req, res) {
    var num = parseInt(req.query.number);
    dbcon.getUsers(num, res)
});


module.exports = router;