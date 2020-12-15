var express = require('express');
var router = express.Router();
const RestaurantsController = require('../controllers/restaurants')

router.get('/', RestaurantsController.getAll);

module.exports = router;
