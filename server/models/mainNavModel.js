const mongoose = require('mongoose');
const Schelma = mongoose.Schema;

const mainNavModel = new Schelma({
    _id: { type: mongoose.ObjectId, required: true },
    elements: { type: Array, required: true },
})

module.exports = mongoose.model('mainNav', mainNavModel);