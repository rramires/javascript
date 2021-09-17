/**
 * Map é uma estrutura chave-valor assim como o Object
 * A diferença é que no object a chave é uma string
 * No map pode ser uma função, um número, etc
 */

//cria a instancia
const tecnologias = new Map()
// setando os valores
tecnologias.set('react', {isFramework: false})
tecnologias.set('angular', {isFramework: true})
// acessando
console.log(tecnologias.react) // undefined - não é assim, tem que usar o get
console.log(tecnologias.get('react')) // { isFramework: false } - retorna o objeto
console.log(tecnologias.get('angular').isFramework) // true - retorna o valor


// outro exemplo, pode conter chaves de todos os tipos
const chavesVariadas = new Map( [
    [function(){}, 'é uma Funcão'],
    [{}, 'é um Objeto'],
    [123, 'é um número']
] )
// percorrendo
chavesVariadas.forEach((valor, chave) => {
    console.log(chave, valor)
})

// testando, se existe
console.log(chavesVariadas.has(123))
chavesVariadas.delete(123)
console.log(chavesVariadas.has(123))

// vendo tamanho
console.log(chavesVariadas.size) // 2, pois um foi excluído com o delete