let num1 = 1
let num2 = 2

// incremento
num1++
console.log(num1)

// decremento
num1--
console.log(num1)

// ++ ou -- antes, tem preferencia na execucao 
console.log(++num1 === num2--) 
// da true mas os valores aparecem diferentes
console.log(num1, num2)
// agora da false
console.log(num1 === num2)

/* 
explicacao:
a) num1 é incrementado, valia 1, passa a valer 2
b) num2, vale 2,compador é executado resultando true
c) num2 é decrementado e exibido seu novo valor 1
*/

// OBS: (++num1 === num2--) Foi feito só pra entender. 
// Não faça esse tipo de porcaria ilegível no seu código.