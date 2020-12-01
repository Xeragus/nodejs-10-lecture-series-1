const Restaurant = require('../models/restaurant')
const faker = require('faker')
const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/bookatab', {useNewUrlParser: true, useUnifiedTopology: true});

for(let i = 0; i < 10; i++) {
  (new Restaurant({
    name: faker.name.lastName(),
    address: faker.address.streetAddress(),
    email: faker.internet.email(),
    phone: faker.phone.phoneNumber(),
    area: faker.random.number({
      min: 10,
      max: 3000
    }),
    employees_count: faker.random.number({
      min: 1,
      max: 100
    }),
    tables_count: faker.random.number({
      min: 1,
      max: 100
    }),
    has_kitchen: faker.random.boolean()
  })).save()
     .then(res => {

     })
     .catch(err => {

     })
}