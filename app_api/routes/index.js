var express = require('express');
var router = express.Router();

var ctrlQuests = require('../controllers/quests');

router.get('/quest', ctrlQuests.getQuests);
router.post('/quest', ctrlQuests.addQuest);

router.get('/quest/:questid', ctrlQuests.getQuest);
router.put('/quest/:questid/rating', ctrlQuests.addRating);

module.exports = router;