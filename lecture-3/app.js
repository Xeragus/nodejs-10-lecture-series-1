const doSomethingTimeConsuming = (successCallback, errorCallback) => {
  try {
    let amount = 2 + 1 // this line of code does something time consuming

    if (amount != 2) throw new Error('The amount is not 2 God damnit!')

    successCallback({
      message: 'All good!',
      amount: amount
    })
  } catch (err) {
    errorCallback({
      message: `Error happened: ${err.message}`
    })
  }
}

doSomethingTimeConsuming((result) => {
  console.log(`Success message is: "${result.message}" and the amount is ${result.amount}`)
}, (error) => {
  console.log(error.message)
})

const doSomethingTimeConsumingPromises = new Promise((resolve, reject) => {
  try {
    let amount = 2 + 1 // this line of code does something time consuming

    if (amount != 2) throw new Error('The amount is not 2 God damnit!')

    resolve({
      message: 'All good!',
      amount: amount
    })
  } catch (err) {
    reject({
      message: `Error happened: ${err.message}`
    })
  }
})

doSomethingTimeConsumingPromises
  .then(result => {
    console.log(`Success message is: "${result.message}" and the amount is ${result.amount}`)
  })
  .catch(error => {
    console.log(error.message)
  })
