var express = require('express');

var router = express.Router();
var path = require('path');

var dbcon = require("../db_repos");
/* GET home page. */
router.get('/', function (req, res, next) {
  res.sendFile(path.join(__dirname + '/../index.html'));
});


router.get('/fetchrecords', function (req, res) {
  var num = parseInt(req.query.number);
  dbcon.getThings(num, res);
});
router.get('/about', function (req, res) {
    res.set('Content-Type', 'text/plain');
    res.send('Jahangir and Munish');
});
router.post('/login', function (req, res) {
    console.log('Request for log in!');
    dbcon.login(req,res);
});
router.get('/users', function (req, res) {
    var num = parseInt(req.query.number);
    dbcon.getUsers(num,res)
});
router.post('/price', function (req, res) {
    // var num = parseInt(req.query.number);
    dbcon.sortByPrice(req,res)
})

module.exports = router;