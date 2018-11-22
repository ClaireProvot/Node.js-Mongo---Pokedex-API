// Module dependencies.
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Schema definition

const type = new Schema({
    _id: Number,
    ename: String,
    jname: String,
    cname: String
});

// association with pokemons db
type.virtual('pokemon', {
    ref: 'Pokemon',
    localField: 'id',
    foreignField: 'type'
})

// Define model 

let Type = mongoose.model('Type', type);

module.exports = Type;