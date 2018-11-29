// Load Models
const Pokemon = require('../models/pokemons');

// Import JSON file
const PokemonsJson = require('../../Pokedex-assignment/data/pokedex.json');


// Populate data of collection 'Pokemon' with a loop
const loadPokemons = () => {
    let allPromises = [];

    let j = 0;
    while (PokemonsJson[j] != undefined) {
        console.log("insert PokemonsJson: ", PokemonsJson);
        const pokemon = new Pokemon({
            base: {
                Attack: PokemonsJson[j].base.Attack,
                Defense: PokemonsJson[j].base.Defense,
                HP: PokemonsJson[j].base.HP,
                SpAtk: PokemonsJson[j].base['Sp.Atk'],
                SpDef: PokemonsJson[j].base['Sp.Def'],
                Speed: PokemonsJson[j].base.Speed,
            },
            cname: PokemonsJson[j].cname,
            ename: PokemonsJson[j].ename,
            _id: PokemonsJson[j].id,
            jname: PokemonsJson[j].jname,
            skills: {
                egg: PokemonsJson[j].skills.egg,
                level_up: PokemonsJson[j].skills.level_up,
                tm: PokemonsJson[j].skills.tm,
                transfer: PokemonsJson[j].skills.transfer,
                tutor: PokemonsJson[j].skills.tutor,
            },
            type: PokemonsJson[j].type[0],
        }, {
            collection: 'Pokemon'
        });
        allPromises.push(pokemon.save());
        j++;
    }

    return Promise.all(allPromises);
};

const findAll = (skip = 0) => {
    // Get all the pokemons  
    //FIXME: populate
    return Pokemon
        .find({})
        .populate('Type')
        .skip(skip)
        .limit(1)
        .exec()
};

const findById = (id = "001") => {
    // Get all the pokemons  by Id
    return Pokemon
        .findById(id)
        .exec()
};

module.exports = {
    loadPokemons: loadPokemons,
    findAll: findAll,
    findById: findById
};