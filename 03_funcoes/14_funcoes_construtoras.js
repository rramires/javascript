function Carro(velMaxima = 200, delta = 5){
    // atributo privado
    let velAtual = 0

    // metodos publicos
    this.acelerar = function(){

        if(velAtual < velMaxima){
            velAtual += delta
        }else{
            velAtual = velMaxima
        }
    }
    this.pegaVelAtual = function(){
        return velAtual
    }
}

// criando a instancia
const uno = new Carro //() sem parametros é opcional os parenteses

// chamando o metodo
console.log(uno.pegaVelAtual()) // 0

uno.acelerar() // +5
uno.acelerar() // +5
uno.acelerar() // +5
uno.acelerar() // +5

console.log(uno.pegaVelAtual()) // 20


const ferrari = new Carro(350, 25)

// chamando o metodo
console.log(ferrari.pegaVelAtual()) // 0

ferrari.acelerar() // +25
ferrari.acelerar() // +25
ferrari.acelerar() // +25
ferrari.acelerar() // +25

console.log(ferrari.pegaVelAtual()) // 100 

// relembrando os tipos
console.log(typeof Carro) // é uma funcao
console.log(typeof uno, typeof ferrari) // as instancias, são objetos