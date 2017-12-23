var express = require('express');
var router = express.Router();

var ctrlQuests = require('../controllers/quests');

router.get('/', ctrlQuests.quests_list);
router.get('/edit', ctrlQuests.quest_edit);
router.get('/preview', ctrlQuests.quest_preview);

var ctrlAuthorization = require('../controllers/authorization');

router.get('/login', ctrlAuthorization.login);
router.get('/register', ctrlAuthorization.register);

var ctrlOthers = require('../controllers/others');

router.get('/rules', ctrlOthers.rules);
router.get('/about', ctrlOthers.about);

module.exports = router;

