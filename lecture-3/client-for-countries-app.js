const axios = require('axios')

axios.post('http://localhost:3000/countries', {
      name: 'Bolivia',
      population: 400000000,
      capital: 'Bolivar'
    }).then(res => {
      console.log('uspesno se izvrsi request: ', res)
    }).catch(err => {
      console.log('se sluci greska', err)
    })