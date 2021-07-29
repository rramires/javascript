const alunos = [
    { nome: 'Fulano', nota: 7.9},
    { nome: 'Sicrano', nota: 9.2},
    { nome: 'Beltrano', nota: 5.8}
]


/*
Imperativo: passo a passo + para entender ou entender e ensinar a resolver o problema
Como uma receita. 1-Faça isso... 2-Calcule aquilo 3-Imprima o resultado... etc

Declarativo: Limpo, com os passos 'encapsulados' em problemas menores!
Não interessa os detalhes de processamento, e sim o que tem que ser feito
Ex: SQL Select nome, email, from clientes Where ativo = 1
Vc diz o que quer ao banco, sem se preocupar em 'como' ele irá fazer isso.

Vantagens do declarativo: Reuso de código e código mais limpo!
*/

// Imperativo
let total1 = 0
for(let i = 0 ; i < alunos.length ; i++){
    total1 += alunos[i].nota
}
//
let media1 = total1 / alunos.length
console.log(parseFloat(media1).toFixed(2))


// Declarativo
// dividir em problemas menores
const getNota = aluno => aluno.nota
const soma = (total, atual) => total + atual
// aplicar
let total2 = alunos.map(getNota).reduce(soma)
//
let media2 = total1 / alunos.length
console.log(parseFloat(media2).toFixed(2))

