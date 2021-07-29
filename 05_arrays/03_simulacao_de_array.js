// Brincadeira só pra entender como seria um Array
const simulaArray = { 0: 'Fulano', 1: 'Sicrano', 2: 'Beltrano' }

// óbvio que é um objeto
console.log(simulaArray, simulaArray[0])

// mas vamos simular alguns dos métodos
// criando um push
Object.prototype.push = function(e){
    let i = -1
    // percorre as propeiedades, 1, 2, 3, etc
    for(let prop in this){
        i++
    }
    this[i] = e // adiciona o elemento no final
    return ++i // retorna o comprimento
}
// criando um toString
Object.defineProperty(simulaArray, 'toString', {
    value: function() { 
        return Object.values(this)
    },
    enumerable: false
})
// Teriam todos os outros métodos
console.log('---------------------------')
//
let comprimento = simulaArray.push('João')
console.log(simulaArray.toString(), ' - Comprimento:', comprimento)
//
console.log(simulaArray[0])
console.log(simulaArray[1])


