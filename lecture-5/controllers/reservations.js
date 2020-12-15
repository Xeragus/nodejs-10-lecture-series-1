const Reservation = require('../models/reservation')
const Restaurant = require('../models/restaurant')

module.exports = {
  get: async (req, res) => {
    const reservations = await Reservation.find({ user: req.user }).populate('restaurant', 'name')

    res.render('reservations/my', { reservations })
  },
  create: async (req, res) => {
    const resContent = { error: false, message: 'Reservation successfully created' }

    try {
      const restaurant = await Restaurant.findById(req.body.restaurant_id)
      resContent.restaurant_id = req.body.restaurant_id

      const reservation = new Reservation({ 
        ...req.body,
        restaurant: restaurant,
        user: req.user
      })

      await reservation.save()
    } catch (err) {
      resContent.error = true;
      resContent.message = err.message;
    }

    res.send(resContent)
  }
}