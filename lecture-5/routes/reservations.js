var express = require('express')
var router = express.Router()
const ReservationsController = require('../controllers/reservations')
const { ensureAuthenticated } = require('../config/auth')

router.all('/', [ensureAuthenticated])

router.get('/', ReservationsController.get)
      .post('/', ReservationsController.create)

module.exports = router
