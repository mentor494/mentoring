
Person = require('./person.js');

PersonHandler = require('./personHandler.js');

writters =  require("./PersonOutputWriter.js")


xmlPrinter = new writters.PersonOutputWriterXml("persons.xml");
jsonPrinter = new writters.PersonOutputWriterJson("persons.json");

csvPrinter = new writters.PersonOutputWriterCsv("persons.csv");

personHandler  = new PersonHandler([xmlPrinter, jsonPrinter, csvPrinter]);


var p = new Person("roee","zilkha",1986)

var p2 = new Person("shay","bicha",1996)


class Company{
    constructor(companyName, foundationYear) {
        this.companyName = companyName
        this.foundationYear = foundationYear;
    }
}



var company = new Company("glassbox",2011)
personHandler.writeToOutputStreams(company);