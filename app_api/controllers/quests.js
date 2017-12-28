var mongoose = require('mongoose');
var quest = mongoose.model('quest');

module.exports.getQuests = function(req, res) {
    quest.find().exec(function (err, data) {
        if (!data) {
            res.status(404);
        } else if (err) {
            res.status(404);
        } else {
            res.status(200);
            res.json(data);
        }
    });
};

module.exports.getQuest = function(req, res) {
    if (req.params && req.params.questid) {
        quest.findById(req.params.questid).exec(function (err, data) {
            if (!data) {
                res.status(404);
            } else if (err) {
                res.status(404);
            } else {
                res.status(200);
                res.json(data);
            }
        });
    } else {
        res.status(404);
    }
};

module.exports.addQuest = function(req, res) {
    quest.create({
        title: req.body.title,
        description: req.body.description,
        location: (req.body.lng && req.body.lat) ?
            [parseFloat(req.body.lng), parseFloat(req.body.lat)] : null
    }, function (err, data) {
        if (err) {
            res.status(400);
            res.json(err);
        } else {
            res.status(201);
            res.json(data);
        }
    });
};

module.exports.addRating = function(req, res) {
    res.status(501);
};