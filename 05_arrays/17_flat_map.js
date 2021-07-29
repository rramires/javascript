const escola = [
    {
        turma: 'Turma M1',
        alunos: [
            {nome: 'Fulano', nota: 8.1},
            {nome: 'Sicrano', nota: 9.3},
            {nome: 'Beltrano', nota: 7.7}
        ]
    },
    {
        turma: 'Turma M2',
        alunos: [
            {nome: 'Ana', nota: 6.3},
            {nome: 'João', nota: 5.8},
            {nome: 'Maria', nota: 8.2},
            {nome: 'José', nota: 7.2}
        ]
    }
]

// objetivo: Extrair todos as notas
const getNotaAluno = aluno => aluno.nota
const getNotasDaTurma = turma => turma.alunos.map(getNotaAluno)

const notas1 = escola.map(getNotasDaTurma)
// fica com 2 arrays
console.log(notas1)

// xunxando o flat
console.log( [].concat( notas1[0], notas1[1] ) )

// criando o flatMap
Array.prototype.flatMap = function(callback){
    return Array.prototype.concat.apply([], this.map(callback))
}
// teste
const notas2 = escola.flatMap(getNotasDaTurma)
console.log(notas2)





