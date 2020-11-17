var express = require('express')
var router = express.Router()
const countries = []

router
      .get('/', (req, res) => {
        res.send({
          error: false,
          message: 'This is the response to sending a GET "/" request'
        })
      })
      .get('/countries', (req, res) => {
        res.send({
          error: false,
          message: 'Here is a list of all countries in the database',
          countries: countries
        })
      })
      .post('/countries', (req, res) => {
        console.log(req.body)
      })

module.exports = router
