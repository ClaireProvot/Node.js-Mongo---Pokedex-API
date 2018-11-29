// Module dependencies.

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = mongoose.Types.ObjectId;

// Schema definition of Pokemon collection
// FIXME: Joint collection with type
const pokemon = new Schema({
    base: {
        Attack: Number,
        Defense: Number,
        HP: Number,
        SpAtk: Number,
        SpDef: Number,
        Speed: Number,
    },
    cname: String,
    ename: String,
    _id: String,
    jname: String,
    skills: {
        egg: [Number],
        level_up: [Number],
        tm: [Number],
        transfer: [Number],
        tutor: [Number],
    },
    type: [{
        type: Schema.ObjectId,
        ref: 'Type'
    }],
});

// Define model 

let Pokemon = mongoose.model('Pokemon', pokemon);

module.exports = Pokemon;