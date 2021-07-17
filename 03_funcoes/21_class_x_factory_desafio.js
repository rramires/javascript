// uma classe é
class Pessoa1{
    constructor(nome){
        this.nome = nome
    }
    falar(){
        console.log(`Eu sou: ${this.nome}!`)
    }
}
const p1 = new Pessoa1('Ricardo')
p1.falar()

// *** importante testar no console do browser
//document.getElementsByTagName('body')[0].onclick = p1.falar
// o this 'se perde' - Eu sou: undefined!


// desafio: transformar em factory
function Pessoa2(n){
    // paramentros
    this.nome = n,

    // metodos
    this.falar = function(){
        console.log(`Eu sou: ${this.nome}!`)
    }
}
const p2 = new Pessoa2('Ricardo')
p2.falar()

//document.getElementsByTagName('body')[0].onclick = p2.falar
// o this 'se perde' - Eu sou: undefined!

// então o melhor é usar uma arrow function internamente
function Pessoa3(n){
    // paramentros
    this.nome = n,

    // metodos, usando arrow
    this.falar = () => {
        console.log(`Eu sou: ${this.nome}!`)
    }
}
const p3 = new Pessoa3('Ricardo')
p3.falar()

//document.getElementsByTagName('body')[0].onclick = p3.falar
// o this 'se perde' - Eu sou: Ricardo!