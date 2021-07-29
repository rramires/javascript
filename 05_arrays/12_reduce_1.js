const alunos = [
    { nome: 'Fulano', nota: 7.3, bolsista: false },
    { nome: 'Sicrano', nota: 9.2, bolsista: true },
    { nome: 'Beltrano', nota: 8.1, bolsista: false }
]
//console.log(alunos)

let resultado


// 1º Desafio: Todos os alunos são bolsistas?
const todosBolsistas = (resultado, bolsista) => resultado && bolsista
// map, pega o atributo bolsista, depois aplica o reduce
resultado = alunos.map(e => e.bolsista).reduce(todosBolsistas)
console.log(resultado)

// 2º Desafio: Existe algum bolsista?
const algumBolsista = (resultado, bolsista) => resultado || bolsista
// map, pega o atributo bolsista, depois aplica o reduce
resultado = alunos.map(e => e.bolsista).reduce(algumBolsista)
console.log(resultado)


