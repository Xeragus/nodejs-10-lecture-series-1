const people = [
  {
    name: 'X',
    lastName: 'y'
  },
  {
    name: '2',
    lastName: '3'
  },
  {
    name: '4',
    lastName: '5'
  }
]
// module e globalen objekt
module.exports = {
  people: people,
  person: '1 and only',
  printSomething: (something) => {
    console.log('go printame toa sto sme go pratile', something)
  }
}