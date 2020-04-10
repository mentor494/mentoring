
class DbHandler{
    constructor() {
        // throw if DbHANDLER
    }

    insert(object){
        throw new Error('Cannot call abstract method')
    }

    removeById(id){
        throw new Error('Cannot call abstract method')
    }

    searchById(id){
        throw new Error('Cannot call abstract method')
    }
}

module.exports = DbHandler