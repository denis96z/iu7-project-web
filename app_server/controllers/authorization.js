module.exports.login = function(req, res) {
    res.render('index', { title: 'Вход' });
}

module.exports.register = function(req, res) {
    res.render('index', { title: 'Регистрация' });
}