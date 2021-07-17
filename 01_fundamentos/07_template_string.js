const nome = 'Ricardo'
// jeito chato
console.log('Olá ' + nome + '!')

// Novidade: 'template string', usar ` ` (apostrofe) para abrir e fechar 
// aceita quebras de linha, tabulacoes, variaveis, expressoes, etc
const template = `
    Olá
    ${nome} !
    Tudo bem?
`
console.log(template)

// aceita expressoes
let n1 = 2
let n2 = 3
console.log(`N1 + N2 = ${n1 + n2}`)

// aceita chamar funcoes
console.log(`Nome: 
${nome.toUpperCase()} !
`)

