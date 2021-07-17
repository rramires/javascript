// tudo é a mesma coisa
// object
console.log(typeof Object) // é uma funcao
console.log(typeof new Object()) // é um object

// function
const Cliente = function(){}

console.log(typeof Cliente) // é uma funcao
console.log(typeof new Cliente()) // é um object

// classe
class Produto {} // ES 2015 (ES6) mas da no mesmo que usar function
console.log(typeof Produto) // é uma funcao
console.log(typeof new Produto()) // é um object
