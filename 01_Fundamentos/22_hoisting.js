// imprimindo sem declarar
console.log(a) // existe mas esta undefined
// declarando e atribuindo
var a = 2 // se comentar essa linha da erro, pois não foi declarada
// imprimindo
console.log(a) // recebeu o valor 2

// **** O var tem comportamento hoising, que eleva/iça/puxa a declaracao da 
// variavel para o começo ou seja o interpretador vai declarar todas as variaveis 
// do código NO MESMO ESCOPO antes de executar.

// *** diferenca para o let

// imprimindo sem declarar
// vai dar erro, pois com o let, 
// nao existe o efeito hoisting

// console.log(b) // ReferenceError
// declarando e atribuindos
let b = 2
// imprimindo
console.log(b)


