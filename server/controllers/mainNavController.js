const mainNavModel = require('../models/mainNavModel');
const mongoose = require('mongoose');

exports.getMainNav = async (req, res) => {
    const findMainNav = await mainNavModel.find({});
    if (findMainNav.length > 0) {
        res.status(200).json({ mainNav: findMainNav[0] })
    }
    else {
        mainNavModel.create({ _id: mongoose.Types.ObjectId(), elements: [] }, (err) => {
            if (err)
                return res.status(500);

            res.status(200).json({ mainNav: findMainNav[0] });
        })
    }
}

exports.editMainNav = async (req, res) => {
    const content = req.body.content;
    const findMainNav = await mainNavModel.find({});
    if (findMainNav.length > 0) {
        mainNavModel.updateOne({ _id: findMainNav[0]._id }, { elements: content }, (err) => {
            if (err)
                return res.status(500);

            res.status(200).json({});
        })
    }
    else {
        mainNavModel.create({ _id: mongoose.Types.ObjectId(), elements: content }, (err) => {
            if (err)
                return res.status(500);

            res.status(200).json({});
        })
    }
}