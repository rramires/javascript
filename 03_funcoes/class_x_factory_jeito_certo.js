// 
class Pessoa1{

    // construtor
    constructor(nome){
        
        // propriedades
        this.nome = nome

        // metodos
        // usar arrow functions, para o this 'nao se perder'
        this.falar = () => {
            console.log(`Eu sou: ${this.nome}!`)
        }
    }
}

const p1 = new Pessoa1('Ricardo')
p1.falar()

// *** importante testar no console do browser
//document.getElementsByTagName('body')[0].onclick = p1.falar
// OK - Imprime: Eu sou: Ricardo! pois arrow function nao muda o escopo do this