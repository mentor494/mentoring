
Person = require('./person.js')

var o2x = require('object-to-xml');
var fs = require('fs');

class PersonOutputWriter {


    constructor(filePath) {
        if (new.target === PersonOutputWriter) {
            throw new TypeError("Cannot construct Abstract instances directly");
        }
        this._file = filePath;
    }


    returnPrint(){
        throw new Error('Cannot call abstract method')
    }

    writeToFile(person){

        var printline =  this.returnPrint(person)+"\n"
        fs.appendFile(this._file, printline, function(err, data){
        })
    }
}


class PersonOutputWriterXml extends PersonOutputWriter{
    constructor(file) {
        super(file);
    }

    returnPrint(person){
        return o2x(person)
    }
}

class PersonOutputWriterJson extends PersonOutputWriter{
    constructor(file) {
        super(file);
    }

    returnPrint(person){
        return JSON.stringify(person)
    }
}

class PersonOutputWriterCsv extends PersonOutputWriter{
    constructor(file) {
        super(file);
    }

    returnPrint(person){
        return person.firstName+","+person.lastName+","+person.yearOfBirth
    }
}


module.exports = {
    "PersonOutputWriterXml": PersonOutputWriterXml,
    "PersonOutputWriterJson": PersonOutputWriterJson,
    "PersonOutputWriterCsv": PersonOutputWriterCsv
};
