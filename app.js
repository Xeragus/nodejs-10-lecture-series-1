// Naogjanje na maksimum vo niza (naogjanje na najgolem broj vo niza od broevi)
let numbers = [4, 66, 5, 403, 100, 300, 3, 4, 59, 63]
// step 1: iteriraj niz nizata
// step 2: sporedi dali tekovniot element e pogolem od maksimalniot element
// step 3: ako e pogolem, znaci maksimalniot ne e maksimalen element

let max = 0
numbers.forEach(number => {
  if (number > max) {
    max = number
  }
})
// max kje bide najgolemiot element vo nizata
console.log(max)

// iteracija 1
// max = 0
// number = 4
// ako 4 e pogolem od 0 togas maksimumot ne e 0 tuku e 4
// maksimumot kje bide 4
// iteracija 2
// max = 4
// number = 66
// ako 66 e pogolem od 4 togas maksimumot ne e 4 tuku e 66
// maksimumot kje bide 66
// iteracija 3
// max = 66
// number = 5
// ako 5 e pogolem od 66 togas maksi...
// maksimumot kje si ostane 66
