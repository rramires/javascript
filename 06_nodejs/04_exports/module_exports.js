// sim, é a mesma coisa
console.log(this === module.exports)
console.log(exports === module.exports)


// então
this.a = 1
exports.b = 2
module.exports.c = 3

// vai achar os 3 atributos
console.log(module.exports)

/**
 * mas tanto o this, como exports sozinho são apenas referência ao module.exports
 * Mas não adianta tentar "apagar" ou substituir usando eles
 */

// Então não adianta
exports = null
// continua
console.log(module.exports)
// ou
exports = {
    nome: 'Teste 1'
}
// continua
console.log(module.exports)

/**
 * O MAIS IMPORTANTE: 
 * A única referencia que é lida externamente é: module.exports
*/
module.exports = {
    nome: 'Teste 2'
}
// ai sim, 'mata' a referencia e perde a, b, c da exportacao
console.log(module.exports)

