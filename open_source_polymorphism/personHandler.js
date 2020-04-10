

class PersonHandler{
    constructor(outputWriters) {
        this._outputWritters = outputWriters;
    }

    writeToOutputStreams(person){
        this._outputWritters.forEach(writer => writer.writeToFile(person))
    }
}

module.exports = PersonHandler;