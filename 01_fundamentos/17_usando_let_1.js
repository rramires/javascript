// revisando
let numero = 1
{
    // Escopo dentro do bloco
    let numero = 2
    console.log('Dentro: ' + numero)
}
// imprime corretamente
console.log('Fora: ' + numero)

/* Diferencas
var = Escopo global ou escopo de funcao
let = Escopo global, de bloco, ou de funcao
*/