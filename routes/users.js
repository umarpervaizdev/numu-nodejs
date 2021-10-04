var express = require('express');
var router = express.Router();
let usersController = require('../controllers/usersController');

router.route('/').get(usersController.getUsers);
router.route('/add').post(usersController.addUser);
router.route('/delete').post(usersController.deleteUser);

module.exports = router;
