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
				return res.status(200).json(result);
			}).catch((err) => { 
				 return res.status(500).send(err);
			})
	});

	app.get('/pokemons/:id', (req, res) => {
		// Get a 'pokemon' by id
		console.log('id pokemon found:', req.params.id);
		pokemonService.findById(req.params.id)
			.then((result) => {
				return res.status(200).json(result);
			}).catch((err) => { 
				return res.status(500).send(err);
		   })
	});

	app.put('/pokemons/:id', (req, res) => {
		// Update a 'pokemon'
		pokemonService.updateById(req.body.id, req.body)
		.then((result) => {
			return res.status(200).json(result);
		}).catch((err) => { 
			return res.status(500).send(err);
	   })
	});

	app.post('/pokemons/:id', (req, res) => {
		// Create a pokemon
		pokemonService.create(req.body)
		.then((result) => {
			return res.status(200).json(result);
		}).catch((err) => { 
			return res.status(500).send(err);
	   })
	});

	app.delete('/pokemons/:id', (req, res) => {
		pokemonService.removeById(req.params.id)
		.then((result) => {
			const response = {
			message: "Pokemon successfully deleted",
			id: req.params.id
		};
			return res.status(200).json(response);
		}).catch((err) => { 
			return res.status(500).send(err);
	   })
	});
};