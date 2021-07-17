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

const p2 = new Pessoa1('João')
p2.falar()


// equivalente a
const criarPessoa1 = function(n) {
    return {
        nome: n,
        falar(){
            console.log(`Eu sou: ${this.nome}!`)
        }
    }
}
const p3 = criarPessoa1('Pedro')
p3.falar()


// arrow 
const criarPessoa2 = n => {
    return {
        falar: () => console.log(`Eu sou: ${n}!`), // arrow dentro de objeto 'da zica' com o this
        // entao se for fazer, usar os paramentros sem this
        //
        // mas é possivel/melhor usar a funcao anonima
        // mesmo que a funcao 'de fora' seja arrow
        nome: n,
        falar2(){
            console.log(`Eu sou: ${this.nome}!`)
        }
    }
}
const p4 = criarPessoa2('José')
p4.falar()
p4.falar2()

