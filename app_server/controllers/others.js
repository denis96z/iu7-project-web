module.exports.rules = function(req, res) {
    res.render('rules', { title: 'Правила пользования' });
}

module.exports.about = function(req, res) {
    res.render('about', { title: 'О нас' });
}