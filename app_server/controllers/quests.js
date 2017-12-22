module.exports.questlist = function(req, res) {
    res.render('questlist', { title: 'Доступные квесты' });
}

module.exports.questedit = function(req, res) {
    res.render('index', { title: 'Создание квеста' });
}

module.exports.questpreview = function(req, res) {
    res.render('index', { title: 'Прохождение квеста' });
}