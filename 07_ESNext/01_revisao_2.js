// arrow function
const saudacao = nome => 'Olá, ' + nome // em uma linha, não precisa dos parenteses
const soma = (a, b) => a + b // em uma linha, com mais parâmetros
const subtracao = (a, b) => { // com corpo/multiplas linhas, usa chaves para delimitar
    return a - b
}
console.log(saudacao('Ricardo'), soma(1,2), subtracao(5,3)) // Olá, Ricardo 3 2


// Arrow function - o 'this' mora dentro de onde a funcao foi definida
const lexico1 = () => console.log(this === module.exports) // true
lexico1() 
// não adianta tenter trocar
// foi criada no module.exports, vai sempre apontar pra ele
const lexico2 = lexico1.bind(new Object) // true
lexico2() 


// paramentros default
function log(txt = 'Node'){
    console.log(txt)
}
log()
log('NodeJS é legal')

// Também é possível com arrow function
const log2 = (txt = 'Node 2') => console.log(txt)
log2()
log2('NodeJS é legal 2')


// operador rest
function total(...numeros){
    let total = 0
    numeros.forEach(n => total += n)
    return total
}
console.log(total(1,2,4,5,8)) // 20

// Também é possível com arrow function
const total2 = (...numeros) => {
    let total = 0
    numeros.forEach(n => total += n)
    return total
}
console.log(total2(1,2,4,5,8)) // 20




