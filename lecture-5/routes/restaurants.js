var express = require('express')
var router = express.Router()
const RestaurantsController = require('../controllers/restaurants')
const { ensureAuthenticated } = require('../config/auth')

router.get('/create', ensureAuthenticated, RestaurantsController.getCreate)
      .get('/', ensureAuthenticated, RestaurantsController.getMyRestaurants)
      .post('/', RestaurantsController.postCreate)
      .post('/:id', RestaurantsController.postUpdate)

module.exports = router
