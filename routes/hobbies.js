var express = require('express');
var router = express.Router();
let hobbiesController = require('../controllers/hobbiesController');

router.route('/').get(hobbiesController.getHobbies);
router.route('/add').post(hobbiesController.addHobby);
router.route('/delete').post(hobbiesController.deleteHobby);

module.exports = router;
