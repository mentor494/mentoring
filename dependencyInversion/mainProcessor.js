


MongoHandler = require("./mongoDbHandler")
dbHandler = new MongoHandler()



const express = require('express');
const app = express();
const port = process.env.PORT || 8080;

const db =  require('mongodb').MongoClient;
// routes will go here

// start the server
app.listen(port);



app.post('/api/users', function(req, res) {
    var user_id = req.body.id;
    var token = req.body.token;
    var geo = req.body.geo;

    dbHandler.insert(req.body)

    res.send(user_id + ' ' + token + ' ' + geo);
});
