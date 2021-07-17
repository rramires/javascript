let status
let notaAluno1 = 6
let notaAluno2 = 8

// atribui 
statusAluno = notaAluno1 >= 7 ? 'Aprovado' : 'Reprovado'
console.log(statusAluno)

statusAluno = notaAluno2 >= 7 ? 'Aprovado' : 'Reprovado'
console.log(statusAluno)


// depois da funcao arrow (=>) operador ternario
const resultado = nota => nota >= 7 ? 'Aprovado' : 'Reprovado'

console.log(resultado(6.9))
console.log(resultado(7))


