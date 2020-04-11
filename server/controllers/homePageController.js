const homePageModel = require('../models/homePageModel');
const mongoose = require('mongoose');

exports.editHomePage = async (req, res) => {
    const content = req.body.content;
    const findHomePage = await homePageModel.find({});
    if (findHomePage.length > 0) {
        homePageModel.updateOne({ _id: findHomePage[0]._id }, { elements: content }, (err) => {
            if (err)
                return res.status(500);

            res.status(200).json({});
        })
    }
    else {
        homePageModel.create({ _id: mongoose.Types.ObjectId(), elements: content }, (err) => {
            if (err)
                return res.status(500);

            res.status(200).json({});
        })
    }
}