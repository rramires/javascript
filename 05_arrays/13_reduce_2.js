const alunos = [
    { nome: 'Fulano', nota: 7.3, bolsista: false },
    { nome: 'Sicrano', nota: 9.2, bolsista: true },
    { nome: 'Beltrano', nota: 8.1, bolsista: false }
]
//console.log(alunos)

let resultado


// 3º desafio: implementar meuReduce
Array.prototype.meuReduce = function(callback, valorInicial){
    // valorInicial definido, pega ele, senão o 1º elemento
    let acumulador = valorInicial || this[0]
    // valorInicial indefinido, inicia no 1º elemento, senão no 2º elemento
    // vai acumulando o resultado do callback
    for(let i = valorInicial ? 0 : 1; i < this.length ; i++){
        acumulador = callback(acumulador, this[i], i, this)
    }
    return acumulador
}

// teste
const nums = [1, 2, 3, 4, 5]

// somando elementos
const soma = (total, valor) => total + valor
resultado = nums.meuReduce(soma)
console.log(resultado) // 15

// somando com valor inicial 10
resultado = nums.meuReduce(soma, 10)
console.log(resultado) // 25


// usando nos exemplos do reduce_1.js

// 1º Desafio: Todos os alunos são bolsistas?
const todosBolsistas = (resultado, bolsista) => resultado && bolsista
// map, pega o atributo bolsista, depois aplica o reduce
resultado = alunos.map(e => e.bolsista).meuReduce(todosBolsistas)
console.log(resultado)


// 2º Desafio: Existe algum bolsista?
const algumBolsista = (resultado, bolsista) => resultado || bolsista
// map, pega o atributo bolsista, depois aplica o reduce
resultado = alunos.map(e => e.bolsista).meuReduce(algumBolsista)
console.log(resultado)


