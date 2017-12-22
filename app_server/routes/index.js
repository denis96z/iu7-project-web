var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
    res.render('index', { title: 'Добро пожаловать' });
});

var ctrlQuests = require('../controllers/quests');

router.get('/questlist', ctrlQuests.questlist);
router.get('/questedit', ctrlQuests.questedit);
router.get('/questpreview', ctrlQuests.questpreview);

var ctrlAuthorization = require('../controllers/authorization');

router.get('/login', ctrlAuthorization.login);
router.get('/register', ctrlAuthorization.register);

module.exports = router;
