let countries = []

module.exports = {
  get: (req, res) => {
    res.send({
      error: false,
      message: 'Here is a list of all countries in the database',
      countries: countries
    })
  },
  post: (req, res) => {
    let error = false
    let message = 'New country successfully added'

    try {
      // throw new Error('ova e simulacija na greska')
      countries.push(req.body) // simulacija za rabota so baza
    } catch (err) {
      error = true
      message = err.message
    }
    
    res.send({
      error: error,
      message: message,
      countries: countries
    })
  },
  patch: (req, res) => {
    let error = false
    // interpolacija na string / string interpolation
    let message = `The country with name ${req.params.name} has been updated!`

    try {
      countries.forEach(country => {
        if (country.name == req.params.name) {
          if (req.body.capital) country.capital = req.body.capital
          if (req.body.name) country.name = req.body.name
        }
      })

    } catch (err) {
      error = true
      message = err.message
    }

    res.send({
      error: error,
      message: message,
      countries: countries
    })
  },
  put: (req, res) => {
    let error = false
    // interpolacija na string / string interpolation
    let message = `The country with name ${req.params.name} has been updated!`

    try {
      countries.forEach(country => {
        if (country.name == req.params.name) {
          country.name = req.body.name
          country.capital = req.body.capital
        }
      })

    } catch (err) {
      error = true
      message = err.message
    }

    res.send({
      error: error,
      message: message,
      countries: countries
    })
  },
  delete: (req, res) => {
    countries = countries.filter(country => country.name != req.params.name)

    res.send({
      countries: countries
    })
  }
}