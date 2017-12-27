module.exports.quest = function(req, res) {
    res.render('quest', {
        title: 'Математика',
        description: 'Решение нескольких задач по теории вероятностей.'
    });
}

module.exports.questlist = function(req, res) {
    res.render('questlist', { title: 'Доступные квесты' });
}

module.exports.questedit = function(req, res) {
    res.render('index', { title: 'Создание квеста' });
}