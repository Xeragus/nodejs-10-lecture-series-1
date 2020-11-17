const promise = new Promise((resolve, reject) => {
  // operation
  if (2 == 3) {
    resolve('Ova e poraka za uspeh')
  } else {
    reject('Ova e poraka za neuspeh')
  }
})
// method chaining
promise
      .then(result => {
        console.log(result)
      })
      .catch(result => {
        console.log(result)
      })
