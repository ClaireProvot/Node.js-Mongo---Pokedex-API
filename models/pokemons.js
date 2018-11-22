
// Module dependencies.
 
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Schema definition

const pokemon = new Schema({
    base : { 
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
    type: [String],
});

// Define model 

let Pokemon = mongoose.model('Pokemon', pokemon);

module.exports = Pokemon;
