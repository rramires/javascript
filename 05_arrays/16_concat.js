const filhas = ['Elisa', 'Gina', 'Hana']
const filhos = ['Ilan', 'Jacob']
// concat(outros arrays separados por , virgula e também outros elementos)
const todos = filhas.concat(filhos)
// não mexe no original
console.log(filhas)
console.log(filhos)
//
console.log(todos)

// aceita de tudo...
console.log([].concat([1,2], 3, 4, [5, 6, 7, 8, ['outro', 'array'] ], 'teste', {a: 1, b: 2}))