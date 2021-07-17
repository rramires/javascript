
const peso1 = 1.0
const peso2 = 3.14

// é number e pronto!
console.log(peso1, typeof peso1, Number.isInteger(peso1))

// é nunber... no teste qdo o valor for float da false, mas se passar inteiro 3.0 não tem como especificar como float
console.log(peso2, typeof peso2, Number.isInteger(peso2))

const avaliacao1 = 9.871
const avaliacao2 = 6.871

const total = avaliacao1 * peso1 + avaliacao2 * peso2
const media = total / (peso1 + peso2)

console.log(media)
console.log(media.toFixed(2))
console.log(media.toString(2)) // em binário
/*
numObj.toString([radix]) Um inteiro entre 2 e 36 especificando a base
*/

console.log(typeof media)
console.log(typeof Number) // é uma function (<==> classe)