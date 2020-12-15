const mongoose = require('mongoose')

const schema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: ['Email address is a required field.'],
    unique: ['Email address already exists.']
  },
  phone: {
    type: String,
    required: true,
    unique: true
  },
  area: {
    type: Number,
    required: true
  },
  employees_count: {
    type: Number,
    required: true
  },
  tables_count: {
    type: Number,
    required: true
  },
  has_kitchen: {
    type: Boolean,
    required: true,
    default: false
  },
  user: {
    type: mongoose.Types.ObjectId,
    ref: 'User'
  },
})

module.exports = mongoose.model('Restaurant', schema)