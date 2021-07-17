console.log(soma(2,3)) // executa normalmente

// function declaration
// é criada 'antes de tudo' ver console.log acima
function soma(x, y){
    return x + y
}


// console.log(subtracao(5,2)) // da erro, pois é criada na linha da atribuicao

// function expression
const subtracao = function(x, y){
    return x - y
}
console.log(subtracao(5,2)) // aqui sim, executa


//console.log(multiplicacao(5,2)) // da erro, pois é criada na linha da atribuicao
//console.log(mult(5,2)) // também é inacessível

// named function expression
// muito pouco usada
// talvez para aparecer o nome (mult no caso) 
// num debug em vez da funcao anonima
const multiplicacao = function mult(x, y){
    return x * y
}
console.log(multiplicacao(5,2)) // aqui sim, executa


