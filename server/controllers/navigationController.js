const navigationsModel = require('../models/navigationsModel');
const mongoose = require('mongoose');

exports.editCreateNavigation = async (req, res) => {
    const id = req.body.id;
    const name = req.body.name;
    const links = req.body.links;
    if (id !== '') {
        const findNavigation = await subpageModel.find({ _id: id });
        if (findNavigation.length > 0) {
            navigationsModel.updateOne({ _id: id }, { name: name, links: links }, (err) => {
                if (err)
                    return res.status(500);

                res.status(200).json({});
            })
        }
        else {
            navigationsModel.create({ _id: mongoose.Types.ObjectId(), name: name, links: links }, (err) => {
                if (err)
                    return res.status(500);

                res.status(200).json({});
            })
        }
    }
    else {
        navigationsModel.create({ _id: mongoose.Types.ObjectId(), name: name, links: links }, (err) => {
            if (err)
                return res.status(500);

            res.status(200).json({});
        })
    }
}