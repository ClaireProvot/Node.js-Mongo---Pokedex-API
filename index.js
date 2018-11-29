// Package dependencies
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

// Load schemas
const pokemons = require('./models/pokemons');
const types = require('./models/types');

// Express
const app = express();

//  Sets up the Express App
const PORT = process.env.port || 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(bodyParser.json());
app.use(bodyParser.text());

// Load routes
const router = require('./routes/router')(app);
const loaderRoute = require('./routes/loader')(app);

//Launch the connection to DB
mongoose.connect('mongodb://localhost/pokedex');
mongoose.connection.on('error', console.error.bind(console, 'connection error:'));
mongoose.connection.once('open', () => {
  console.log(`Database connected!`);
});


// Start listening server 

app.listen(PORT, function () {
  console.log('App listening at port ', PORT);
});