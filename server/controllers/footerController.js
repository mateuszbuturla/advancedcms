const footerModel = require('../models/footerModel');
const mongoose = require('mongoose');

exports.getFooter = async (req, res) => {
    const findFooter = await footerModel.find({});
    if (findFooter.length > 0) {
        res.status(200).json({ footer: findFooter[0] })
    }
    else {
        footerModel.create({ _id: mongoose.Types.ObjectId(), elements: [] }, (err) => {
            if (err)
                return res.status(500);

            res.status(200).json({ footer: findFooter[0] });
        })
    }
}

exports.editFooter = async (req, res) => {
    const elements = req.body.elements;
    const findFooter = await footerModel.find({});
    if (findFooter.length > 0) {
        footerModel.updateOne({ _id: findFooter[0]._id }, { elements: elements }, (err) => {
            if (err)
                return res.status(500);

            res.status(200).json({});
        })
    }
    else {
        footerModel.create({ _id: mongoose.Types.ObjectId(), elements: content }, (err) => {
            if (err)
                return res.status(500);

            res.status(200).json({});
        })
    }
}