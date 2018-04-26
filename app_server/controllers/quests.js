var request = require('request');
const host = 'http://localhost:3000';

module.exports.quest = function(req, res) {
    if (req.params && req.params.questid) {
        var reqOptions = {
            url: host + '/api/quest/' + req.params.questid,
            method: 'GET',
            json: {},
            qs: {}
        };
        request(reqOptions, function (err, response, body) {
            if (err || !response) {
                res.status(404);
            } else {
                var coords = (body.location && body.location.length == 2) ?
                    (body.location[1].toString() + ',' +
                    body.location[0].toString()) : null;
    
                res.render('quest', {
                    title: body.title,
                    questInfo: {
                        title: body.title,
                        description: body.description,
                        location: coords ?
                            ('https://static-maps.yandex.ru/1.x/?ll=' +
                            coords + '&size=450,450&scale=1.5&z=13&l=map&pt=' +
                            coords + ',pm2gnm') : null,
                        topParticipants: body.topParticipants,
                        rating: body.rating
                    }
                });
            }
        });
    } else {
        res.status(404);
    }
}

module.exports.questlist = function(req, res) {
    var reqOptions = {
        url: host + '/api/questlist',
        method: 'GET',
        json: {},
        qs: {}
    };
    request(reqOptions, function (err, response, body) {
        res.render('questlist', {
            title: 'Список квестов',
            questInfo: body
        });
    });
};

module.exports.questedit = function(req, res) {
    res.status(501);
}