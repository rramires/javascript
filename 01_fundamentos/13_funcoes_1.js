// funcao sem retorno
function imprimirSoma(n1, n2){
    console.log('O resultado é: ' + (n1 + n2))
}
imprimirSoma(3, 5)

// bizarrices da falta de validacao do JS
// aceita, da caca (undefined + undefined = NaN), mas aceita
imprimirSoma()
// aceita, da caca (3 + undefined = NaN), mas aceita
imprimirSoma(3)
// aceita, ignora o que nao for usado
imprimirSoma(3, 5, 6, 7, 8)

// funcao com retorno
// possivel definir valor padrao
function soma(n1, n2 = 0){
    return n1 + n2
}

// soma
console.log(soma(2,3))
// Passando só o 1º parametro, 
// pega o padrao que foi definido como 
console.log(soma(2))
// Da NaN, undefined + 0
console.log(soma())
