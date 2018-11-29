// Service dependancies
const typeService = require('../services/type-service');
const pokemonService = require('../services/pokemon-service');

module.exports = (app) => {
    app.get('/load-database', (req, res) => {
        // Create collection in DB
        pokemonService.loadPokemons()
            .then(() => {
                typeService.loadTypes()
            })
            .then(() => {
                return res.json({});
            });
    });
};