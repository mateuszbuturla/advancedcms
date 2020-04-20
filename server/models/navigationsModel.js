const mongoose = require('mongoose');
const Schelma = mongoose.Schema;

const navigationsModel = new Schelma({
    _id: { type: mongoose.ObjectId, required: true },
    name: { type: String, required: true },
    links: { type: Array, required: true },
})

module.exports = mongoose.model('nagivations', navigationsModel);