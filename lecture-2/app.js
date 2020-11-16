// importiranje na nesto sto modulot eksportira
// pateka pisuvame samo za file-based modules
const dataObj = require('./people-data')

// npm init za kreiranje package.json
// npm install <name> za instaliranje na modul

console.log('eve ja nizata so lugje', dataObj.people)
console.log(dataObj.person)
dataObj.printSomething('NG')