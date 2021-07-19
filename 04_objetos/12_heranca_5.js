// relembrando
console.log(typeof String) // String é uma function 
console.log(typeof Array) // Array é uma function 
console.log(typeof Number) // Number é uma function 
console.log(typeof Object) // Object é uma function 
/*
então todos eles tem o Function.prototype, o que permite fazer coisas interessantes
*/

// criando um metodo que nao existe
String.prototype.reverse = function(){
    // converte em array, inverte os elementos e concatena em uma string novamente
    return this.split('').reverse().join('')
}
console.log('aluno ricardo'.reverse())

// pegando o primeiro e o ultimo elemento
// relembrando que pop() e unshift() removem o elemento
Array.prototype.getFirst = function(){
    return this[0]
}
Array.prototype.getLast = function(){
    return this[this.length-1]
}
const frutas = ['Tomate', 'Banana', 'Limão', 'Jabuticaba']
console.log(frutas.getFirst(), frutas.getLast())

// pegando um valor aleatorio de 1 até o numero
Number.prototype.getRandom = function(){
    return Math.ceil(Math.random() * this)
}
// sorteando de 1 a 10
console.log((10).getRandom())

// **** ATENCAO ****
// cuidado pra nao sobrescrever metodos já existentes, ex:
String.prototype.toString = function(){
    return 'Vai dar a maior merda...'
}
// testando, lembra do nosso metodo reverse()
console.log('aluno ricardo'.reverse())




