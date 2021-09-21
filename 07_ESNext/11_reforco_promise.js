/*
// 1 - é uma promessa, que recebe uma função
let p = new Promise((resolve, reject) => {
    // 2 - executa chamando essa função - return do valor
    resolve()
    // 3 - ou é rejeitada
    reject()
})

Promises servem para encadear execução de código de forma elegante
*/

/**
 * Ex 1: Criamos uma Promise que retorna um array com 3 elementos
 */
let p1 = new Promise((resolve) => {
    // retorna para a função que é passada
    resolve(['Fulano', 'Sicrano', 'Beltrano'])
})
/**
 * Para executar usamos o .then(), ou mais de um em cascata
 * pode ser p1.then(funcao).then(outraFuncao), ou apenas 
 * .then(funcao).then(outraFuncao) se estiver na sequencia do código
 * O resultado do primeiro .then executado, é passado para o próximo
 * e assim sucessivamente
 */ 
// Exemplos:
// 1 - Nesse caso foi passado uma função simples, que apenas retorna 
console.log( p1.then(nomes => nomes) ) // Retornou ['Fulano', 'Sicrano', 'Beltrano']

// 2 - Encadeando
p1.then(nomes => nomes[1]) // retorna o segundo nome: Sicrano
  .then(nome => nome[0]) // retorna a primeira letra: S
  .then(letra => letra.toLowerCase()) // retorna: s em caixa baixa
  .then(l => console.log(l)) // imprime: s

// 2 - Fazendo a mesma coisa de maneira mais elegante
// com funcoes reaproveitáveis:
const getFirst = value => value[0]
const getSecond = value => value[1]
const toLower = value => value.toLowerCase()
const log = value => console.log(value)
// Aplicando
p1.then(getSecond) // retorna o segundo nome: Sicrano
  .then(getFirst) // retorna a primeira letra: S
  .then(toLower) // retorna: s em caixa baixa
  .then(log) // imprime: s


  