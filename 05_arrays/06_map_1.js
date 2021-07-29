/*
map, um loop com um propósito de alterar elementos
mapeia os objetos, modificando alguma coisa nos elementos para outro array

>>> o array de resultado tem o mesmo tamanho <<< Importante!
>>> Não modifica o array original, apenas retorna <<<

array.map( fnCallBack( elemento, indice, o proprio array ){ } ) ) 
*/

const nums = [1, 2, 3, 4, 5]

let resultado

// ex: dobra o valor
resultado = nums.map(function(e){
    return e * 2
})
console.log(resultado)
// não mexeu no original
console.log(nums)

// lembrando do Array [1, 2, 3, 4, 5]
// com arrow
const soma10 = e => e + 10 // 1 + 10 = 11 - 2 + 10 = 12, etc
const triplo = e => e * 3 // 11 * 3 = 33 - 12 * 3 = 36, etc
const emReal = e => `R$ ${parseFloat(e).toFixed(2).replace('.',',')}` // Formata: 'R$ 33,00', 'R$ 36,00', etc...

// encadeando as chamadas, soma 10, depois multiplica por 3 e converte em string com a formatacao
resultado = nums.map(soma10).map(triplo).map(emReal)
console.log(resultado)



