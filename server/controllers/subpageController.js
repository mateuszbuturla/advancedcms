const subpageModel = require('../models/subpageModel');
const mongoose = require('mongoose');

exports.getAllSubpages = async (req, res) => {
    const findSubpages = await subpageModel.find({});
    res.status(200).json({ subpages: findSubpages })
}

exports.editCreateSubpage = async (req, res) => {
    const name = req.body.name;
    const content = req.body.content;
    const findSubpage = await subpageModel.find({ name: name });
    if (findSubpage.length > 0) {
        subpageModel.updateOne({ _id: findSubpage[0]._id }, { name: name, elements: content }, (err) => {
            if (err)
                return res.status(500);

            res.status(200).json({});
        })
    }
    else {
        subpageModel.create({ _id: mongoose.Types.ObjectId(), name: name, elements: content }, (err) => {
            if (err)
                return res.status(500);

            res.status(200).json({});
        })
    }
}