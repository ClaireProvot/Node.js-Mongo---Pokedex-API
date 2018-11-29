// Module dependencies.
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = mongoose.Types.ObjectId;

// Schema definition of Type collection

const type = new Schema({
    _id: Number,
    ename: String,
    jname: String,
    cname: [{
        type: Schema.ObjectId,
        ref: 'Pokemon'
    }],
});

// Define model 

let Type = mongoose.model('Type', type);

module.exports = Type;