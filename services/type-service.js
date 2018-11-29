// Load Models
const Type = require('../models/types');

// Import data from JSON file
const TypesJson = require('../../Pokedex-assignment/data/types.json');

// Populate data of collection 'Types' with a loop
const loadTypes = () => {
    let allPromises = [];

    let i = 0;
    while (TypesJson[i] != undefined) {
        console.log("insert TypesJson: ", TypesJson);
        const type = new Type({
            _id: i,
            cname: TypesJson[i].cname,
            ename: TypesJson[i].ename,
            jname: TypesJson[i].jname,
        }, {
            collection: 'Type'
        });
        allPromises.push(type.save());
        i++;
    }

    return Promise.all(allPromises);
};

module.exports = {
    loadTypes: loadTypes,
};