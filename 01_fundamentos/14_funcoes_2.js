// armazenando funcao em variavel
const imprimirSoma = function(n1, n2){
    console.log('O resultado é: ' + (n1 + n2))
}
imprimirSoma(2,3)

// funcao arrow (novidade 2015) => substitui function
const soma = (n1, n2) => {
    return n1 + n2
}
console.log(soma(2,3))

// arrow com retorno simplificado, 
// depois do => colocar em 1 linha o que vai ser retornado
const subtracao = (n1, n2) => n1 - n2 // tem que ser uma linha só
//
console.log(subtracao(5,2))

// com um parametro só, nao precisa nem de parenteses
const imprime = str => console.log(str)
//
imprime('Oiia, que legal!')



