const mongoose = require('mongoose')

const schema = mongoose.Schema({
  restaurant: {
    type: mongoose.Types.ObjectId,
    ref: 'Restaurant'
  },
  user: {
    type: mongoose.Types.ObjectId,
    ref: 'User'
  },
  people_count: {
    type: Number,
    required: true
  },
  tables_count: {
    type: Number,
    required: true
  },
  date_time_description: {
    type: String,
    required: true
  },
  is_accepted: {
    type: Boolean,
    default: false
  }
})

module.exports = mongoose.model('Reservation', schema)