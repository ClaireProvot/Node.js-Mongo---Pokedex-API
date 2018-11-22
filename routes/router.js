module.exports = (app) => {
	//CRUD
	app.get('/pokemons', (req, res) => {
		// Get all the pokemons 
		res.json(result);
	});

	app.get('/pokemons/:id', (req, res) => {
		// Get a 'pokemon' by id
		res.json(result);
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
