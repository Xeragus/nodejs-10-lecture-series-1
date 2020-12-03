const Restaurant = require('../models/restaurant')

module.exports = {
  getCreate: (req, res) => {
    res.render('restaurants/create')
  },
  getMyRestaurants: async (req, res) => {
    const restaurants = await Restaurant.find()

    res.render('restaurants/my', { restaurants: restaurants })
  },
  postCreate: async (req, res) => {
    try {
      const restaurant = new Restaurant(req.body)
      restaurant.has_kitchen = req.body.has_kitchen == 'on' ? true : false

      await restaurant.save()
    } catch (err) {
      res.render('restaurants/create', {
        ...req.body,
        error: true,
        message: err.message
      })
    }

    res.redirect('/restaurants')
  },
  postUpdate: async (req, res) => {
    try {
      req.body.has_kitchen = req.body.has_kitchen == 'on' ? true : false
      
      await Restaurant.updateOne({ _id: req.params.id }, req.body)
    } catch (err) {
      // res.render('restaurants/my', {
      //   ...req.body,
      //   error: true,
      //   message: err.message
      // })
    }

    res.redirect('/restaurants')
  },
}
