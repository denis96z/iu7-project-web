module.exports.quest = function(req, res) {
    res.render('quest', {
        title: 'Математика',
        questInfo: {
            title: 'Математика',
            description: 'Решение задач по теории вероятностей.',
            location: 'https://static-maps.yandex.ru/1.x/?ll=' +
                '37.620070,55.753630' +
                '&size=450,450&scale=1.5&z=13&l=map&pt=' +
                '37.620070,55.753630' +
                ',pm2gnm',
            topParticipants: ['Дмитрий Орлов', 'Денис Зиновьев'],
            rating: 4
        }
    });
}

module.exports.questlist = function(req, res) {
    res.render('questlist', {
        title: 'Доступные квесты',
        questInfo: [{
            title: 'Математика',
            description: 'Решение задач по теории вероятностей.',
            rating: 4
        }, {
            title: 'Физика',
            description: 'Выполнение лабораторной работы.',
            rating: 2
        }]
    });
}

module.exports.questedit = function(req, res) {
    res.render('index', { title: 'Создание квеста' });
}