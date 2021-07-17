// desestruturando array, pega o elemento 0, pula o 1 e pega 2
const [a, , b] = [1, 3, 5]
// imprime os valores 1 e 5
console.log(a, b)


// desestruturando array, pega o elemento 0, pula o 1 e pega 2
// definido valor padrado para o e
const [c, , d, e = 0] = [1, 3, 5]
// imprime os valores 1, 5 e 0
console.log(c, d, e)

// desestruturando array, com outros subarray
const [, [, nota]] = [ [, 8, 8], [9, 6, 5]] 
// imprime o segundo elemento do segundo array 6
console.log(nota)



