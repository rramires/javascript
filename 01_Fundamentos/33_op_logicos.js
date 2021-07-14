/*
Tabela verdade:

1) && - and - e - 
Basta ter UM FALSO que é falso
Todos tem que ser verdadeiros para ser verdadeiro:

V e V = V
V e F = F
F e V = F
F e F = F

2) || - or - ou - 
Basta ter UM VERDADEIRO que é verdadeiro 
Todos tem que ser falsos, para dar falso:

V ou V = V
V ou F = V
F ou V = V
F ou F = F

3) ^ - XOR - OU exclusivo 
Iguais = false e diferentes = true:

V xor V = F
V xor F = V
F xor V = V
F xor F = F

4) ! - NOT - Negação (inverte, se é true da false, se é false da true)
!F = V
!V = F

*/

/*
Problema: 
a) Se entregar (e receber) 2 trabalhos executados essa semana vc vai ao shopping,  toma sorvete e compra uma TV 50".
b) Se entregar apenas 1, compra uma TV de 32" e toma sorvete
c) Se não entregar nenhum fica em casa, mas fica saudavel sem tomar o sorvete
*/
function compras(serv1, serv2){

    const comprarSorvete = serv1 || serv2 // se um trabalho der certo

    const comprarTv50 = serv1 && serv2 // se os dois trabalhos derem certo

    //const comprarTv32 = !!(serv1 ^ serv2) // Xor binario, convertido - bitwise xor workaround
    // ou mais simples
    const comprarTv32 = serv1 != serv2 // Xor simulado

    const ficarSaudavel = !comprarSorvete // operador unario

    // retornando um objeto pra facilitar a visualizacao
    return {comprarSorvete, comprarTv50, comprarTv32, ficarSaudavel}
}

// Testes:

// Os 2 trabalhos deram certo
console.log('1)', compras(true, true))

// Apenas 1 trabalho deu certo
console.log('2)', compras(true, false))
console.log('3)', compras(false, true))

// Nenhum trabalho deu certo
console.log('4)', compras(false, false))




