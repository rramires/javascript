
// pessoa -> 01010101(o objeto é um end de memoria)
const pessoa = {nome: 'Ricardo'}

console.log(pessoa.nome)

// é possivel, pois o objeto é o mesmo
pessoa.nome = 'Batata'
// inclusive criar novas propriedades 
pessoa.telefone = 999998888

console.log(pessoa.nome)
console.log(pessoa.telefone) 

// da erro, pois que não pode ser trocado 
// é o valor que no caso era o 1º objeto
// pessoa -> 00100100(o objeto é um end de memoria)
//pessoa = {produto: 'Notebook'}

/*
 Uma maneira de não deixar mudar nada no objeto
 é usar o Object.freeze
*/

// congelando um objeto
Object.freeze(pessoa)

// é ignorado não consegue atribuir
pessoa.nome = 'João'
// não consegue criar propriedade
pessoa.end = 'Rua Bago de Uva, 123'

// nem deletar, nem propriedade nem o objeto em si
delete pessoa.nome
delete pessoa

console.log(pessoa)

// Se quiser criar um objeto que não será alterado 
const objNaoMudaNada = Object.freeze({nome: 'João', telefone: 99889945})




