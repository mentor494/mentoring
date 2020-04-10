
Dbhandler = require("./DbHandler)


class MongoDbHandler extends Dbhandler{
    constructor() {
        super();
        this._db  =  require('mongodb').MongoClient;
    }

    insert(object){
        this._db.collection("persons").insertOne(object,function(err, res){

        })
    }

    removeById(id){

    }

    searchById(id){

    }
}

module.exports = MongoDbHandler