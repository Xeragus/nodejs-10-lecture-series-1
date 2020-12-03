var express = require('express')
var router = express.Router()
const RestaurantsController = require('../controllers/restaurants')

router.get('/create', RestaurantsController.getCreate)
      .get('/', RestaurantsController.getMyRestaurants)
      .post('/', RestaurantsController.postCreate)
      .post('/:id', RestaurantsController.postUpdate)

module.exports = router
