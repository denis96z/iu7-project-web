var express = require('express');
var router = express.Router();

var ctrlQuests = require('../controllers/quests');

router.get('/', ctrlQuests.quests_list);
router.get('/edit', ctrlQuests.quest_edit);
router.get('/preview', ctrlQuests.quest_preview);

var ctrlAuthorization = require('../controllers/authorization');

router.get('/login', ctrlAuthorization.login);
router.get('/register', ctrlAuthorization.register);

module.exports = router;
