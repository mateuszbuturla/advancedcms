const mongoose = require('mongoose');
const Schelma = mongoose.Schema;

const subpageModel = new Schelma({
    _id: { type: mongoose.ObjectId, required: true },
    name: { type: String, required: true },
    elements: { type: Array, required: true },
})

module.exports = mongoose.model('subpageModel', subpageModel);