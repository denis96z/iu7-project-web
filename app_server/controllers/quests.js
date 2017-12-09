module.exports.quests_list = function(req, res) {
    res.render('index', { title: 'Список квестов' });
}

module.exports.quest_edit = function(req, res) {
    res.render('index', { title: 'Создание квеста' });
}

module.exports.quest_preview = function(req, res) {
    res.render('index', { title: 'Прохождение квеста' });
}