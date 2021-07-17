// sem valor padrao
function soma1(a, b, c){
    return a + b + c
}
// temos problemas qdo nao passamos todos os parametros
console.log(soma1(1)) // NaN
console.log(soma1(1,2)) // NaN
console.log(soma1(1,2,3)) // OK - 6

// 1ª maneira
function soma1(a, b, c){
    // Vlidando com o OR - Se der false, atribui o valor 0
    // **** cuidado! Só da certo se o valor padrão for 0. 
    // Ex  a = a || 1 e fosse passado soma1(0, 1) daria 2 de saida
    a = a || 0
    b = b || 0
    c = c || 0
    return a + b + c
}

console.log(soma1(1)) // 1
console.log(soma1(1,2)) // 3
console.log(soma1(1,2,3)) // 6

// 2ª maneira
function soma2(a, b, c){
    // validando, usando operador ternario, if, etc
    // se a NAO for Number, atribui 0, senao atribui a, etc
    a = isNaN(a) ? 0 : a;
    b = isNaN(b) ? 0 : b;
    c = isNaN(c) ? 0 : c;

    return a + b + c
}

console.log(soma2(1)) // OK - 1
console.log(soma2(1,2)) // OK - 3
console.log(soma2(1,2,3)) // OK - 6


// 3ª maneira a partir do ES2015
function soma3(a = 0, b = 0, c = 0){
    return a + b + c
}

console.log(soma3(1)) // OK - 1
console.log(soma3(1,2)) // OK - 3
console.log(soma3(1,2,3)) // OK - 6

