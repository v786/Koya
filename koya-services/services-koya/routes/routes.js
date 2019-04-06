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
    const url = 'https://housing.com/rent/flats-for-rent-in-mysore-karnataka-P73itnd4i57h4o32k';
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