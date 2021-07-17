// funcao randomica, usando desestruturacao com array
function rand([min = 0, max = 1000]){

    // inverte se o minimo for maior que o maximo
    if(min > max) [min, max] = [max, min]

    // min e max, sao pegos da desestruturacao
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

// agora tanto faz a ordem, por causa da condicao
// o menor valor fica de minimo e o maior de maximo
console.log(rand([40, 50]))
console.log(rand([50, 40]))

// se passar um valor só sera definido como minimo
console.log(rand([990])) // 990 - 1000

// pode ser passado com valor indefinido também
console.log(rand([,990])) // 0 - 990

// pode ser passado array vazio, pega os valores padrao
console.log(rand([])) // 0 - 1000
