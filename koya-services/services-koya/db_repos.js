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
// exports.putThings = function(data,response){
//     db.estate.insertOne(data,function(err,res){
//         if(err) throw err
//         console.log("inserted into estate")
//         // db.close
//     });
// }
// to-do implementation
// exports.filterThings = function(data, response){
//     if (data.estate.bedroom === null){

//     }
// }

exports.login = function(data, response){
    db.users.findOne({username:data.body.username},function(err,docs){
        if(docs!= null){
        if(docs.password == data.body.password){
            response.json("1")
            console.log("logged in")
        }
        else{
            console.log("incorrect username and password")
            response.json("0")
        }
    }
    else{
        response.json("error")
    }
    });
}

exports.getUsers = function (limNum, response) {
    db.users.find().limit(limNum, function (err, docs) {
    response.json(docs);
    });
}

exports.sortByPrice = function(data, response){
    var num1 = parseInt(data.body.upper)
    var num2 = parseInt(data.body.lower)
    db.estate.find({cost:{$lt:num1,$gt:num2}},function(err, doc){
        console.log(doc)
        if(doc){
            response.json(doc)
        }
        else{
            response.json("sorry")
        }
    })
}

// exports.sortByPrice = function(data1, data2, response){

// }