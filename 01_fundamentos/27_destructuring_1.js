// novo recurso ES2015

const pessoa = {
    nome: 'João',
    idade: 30,
    endereco: {
        logradouro: 'Rua Bago de Uva',
        numero: 123
    }
}

// desestruturando, mudando para esse escopo
const { nome, idade } = pessoa
// imprime
console.log(nome, idade)

// desestruturando e alterando os nomes das variaveis
const { nome: n, idade: i} = pessoa
console.log(n, i)

// se pegar algo que nao existe, retorna undefined
const { naoExiste: ne } = pessoa
console.log(ne)

// se pegar algo que nao existe, podemos setar valores padrao
const { naoExiste: ne2 = 'Não preenchido', valorNE: vne = 0 } = pessoa
console.log(ne2, vne)

// desestruturando dado aninhado
const { nome: no, idade: id, endereco: {  logradouro: lg, numero: nu, cep: cp = 0 } } = pessoa
console.log(no, id, lg, cp)
