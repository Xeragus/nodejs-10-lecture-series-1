var express = require('express')
var router = express.Router()
const CountriesController = require('../controllers/countries')

// CRUD = Create, Read, Update, Delete
router
      .get('/', CountriesController.get) // citanje / READ
      .post('/', CountriesController.post) // kreiranje / CREATE
      .patch('/:name', CountriesController.patch) // update
      .put('/:name', CountriesController.put) // update
      .delete('/:name', CountriesController.delete) // delete

module.exports = router
