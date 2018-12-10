// Services dependancies
const typeService = require('../services/type-service');
const pokemonService = require('../services/pokemon-service');


module.exports = (app) => {
	//CRUD
	app.get('/pokemons', (req, res) => {
		// Get all the pokemons 
		console.log('pokemon skipped:', parseInt(req.query.skip));
		pokemonService.findAll(parseInt(req.query.skip))
			.then((result) => {
				console.log('pokemon :', result)
				return res.json(result);
			})
	});

	app.get('/pokemons/:id', (req, res) => {
		// Get a 'pokemon' by id
		console.log('id pokemon found:', req.params.id);
		pokemonService.findById(req.params.id)
			.then((result) => {
				return res.json(result);
			})
	});

	app.put('/pokemons/:id', (req, res) => {
		// Update a 'pokemon'
		res.json(result);
	});

	app.post('/pokemons/:id', (req, res) => {
		// Create a pokemon
		res.json(result);
	});

	app.delete('/pokemons/:id', (req, res) => {
		// Delete a pokemon
		res.json({});
	});
};