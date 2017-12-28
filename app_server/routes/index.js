var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
    res.render('index', { title: 'Добро пожаловать' });
});

var ctrlQuests = require('../controllers/quests');

router.get('/quest/:questid', ctrlQuests.quest);
router.get('/questlist', ctrlQuests.questlist);
router.get('/questedit', ctrlQuests.questedit);

var ctrlAuthorization = require('../controllers/authorization');

router.get('/login', ctrlAuthorization.login);
router.get('/register', ctrlAuthorization.register);

var ctrlOthers = require('../controllers/others');

router.get('/rules', ctrlOthers.rules);
router.get('/about', ctrlOthers.about);

module.exports = router;

