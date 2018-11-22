const typeService = require('../services/type-service');
const pokemonService = require('../services/pokemon-service');

module.exports = (app) => {
	app.get('/load-database', (req, res) => {
        let p1 = pokemonService.loadPokemons();
        let p2 = typeService.loadTypes();
        Promise.all([p1, p2]).then(() => {
            return res.json({});
        });
	});
};
