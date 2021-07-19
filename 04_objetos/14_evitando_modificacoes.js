// 1 - Object.preventExtensions - não permite adicionar atributos
const produto = Object.preventExtensions({
    nome: 'Saco de Lixo',
    preco: 1.99,
    tag: 'promocao'
})
console.log(produto)
// verificando se foi criado com 'preventExtensions'
console.log(Object.isExtensible(produto)) // false
// testando
produto.nome = 'Borracha' // é possível modificar
produto.descricao = 'Borracha escolar branca' // não é possivel adicionar atributos
delete produto.tag // é possivel remover atributos
console.log(produto)

// 2 - Object.seal - não permite adicionar, nem deletar atributos
const pessoa = {nome: 'Marcolino', idade: 33}
// selando
Object.seal(pessoa)
console.log(pessoa)
// verificando se está selado
console.log(Object.isSealed(pessoa)) // true
// testando
pessoa.nome = 'João' // é possível modificar valor
pessoa.sobrenome = 'Silva' // não é possivel adicionar atributo
delete pessoa.idade // não é possivel remover atributo
console.log(pessoa)

// 3 - Object.freeze - não permite nenhuam modificação de atributos e valores
const veiculo = {marca: 'GM', preco: 50000}
console.log(veiculo)
// congelando
Object.freeze(veiculo)
// verificando se foi congelado
console.log(Object.isFrozen(veiculo)) // true
// testando
veiculo.marca = 'Ford' // não é possivel modificar valor
veiculo.cor = 'Azul' // não é possivel adicionar atributos
delete veiculo.preco // não é possivel remover atributo
console.log(veiculo)


