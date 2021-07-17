const pessoa = {
    nome: 'Ricardo',
    idade: 45,
    peso: 82
}

// Object.keys() 
// retorna os nomes dos atributos
console.log(Object.keys(pessoa)) 
// [ 'nome', 'idade', 'peso' ]

// Object.values()
// retorna os valores dos atributos
console.log(Object.values(pessoa)) 
// [ 'Ricardo', 45, 82 ]

// Object.entries()
// retorna os nomes e valores dos atributos
console.log(Object.entries(pessoa)) 
// [ [ 'nome', 'Ricardo' ], [ 'idade', 45 ], [ 'peso', 82 ] ]

// assim da pra percorrer
// ex:
Object.entries(pessoa).forEach(e => {
    // 0 = atributo, 1 = valor
    console.log(`${e[0]}: ${e[1]}`)
});
// ex usando destructuring [chave, valor]:
Object.entries(pessoa).forEach( ([chave, valor]) => {
    // mais limpo
    console.log(`${chave}: ${valor}`)
});

// Object.defineProperty(dest, prop, {})
// alvo, propriedade, obj com as caracteristicas
Object.defineProperty(pessoa, 'dtNasc', {
    enumerable: true, // listado/visivel ex: Object.keys
    writable: false, // pode mudar o valor, funciona como o freeze só que para a propriedade
    value: '01/05/1988' // valor inicial
})
console.log(pessoa)
// testando o writable: false
pessoa.dtNasc = '01/01/2019'
// perceba que o valor de dtNasc NÃO foi alterado
console.log(pessoa)
// testando, mude para enumerable: false
// perceba que dtNasc não foi listada
// e que os valores dela tb nao foram exibidos
console.log(Object.keys(pessoa))

// Object.assign ES2015 (dest, objeto1, objeto2, etc)
// concatena atributos de objetos
const dest = {a: 1}
const obj1 = {b: 2}
const obj2 = {c: 3}
// concatenando
Object.assign(dest, obj1, obj2)
console.log(dest)

// Object.freeze()
// congela o objeto, não permitindo alteracao de valores dos atributos
Object.freeze(dest)
dest.a = 10
dest.b = 20
// valores nao foram alterados
console.log(dest)






