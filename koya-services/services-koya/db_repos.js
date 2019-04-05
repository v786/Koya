var mongojs = require("./node_modules/mongojs");
var databaseUrl = 'mongodb://localhost:27017/Koya';
var collections = 'estate';
var db = mongojs(databaseUrl);
db.on('connect', function () {
  console.log('database connected')
});
var test = db.collection(collections);
console.log(test);

exports.getThings = function (limNum, response) {
  db.estate.find().limit(limNum, function (err, docs) {
    // docs is an array of all the documents in mycollection
    //console.log(docs);
    response.json(docs);
  });
}
exports.putThings = function(data,response){
    db.estate.insertOne(data,function(err,res){
        if(err) throw err
        console.log("inserted into estate")
        // db.close
    });
}
// to-do implementation
exports.filterThings = function(data, response){
    
}