// o proprio console é um object
console.log(typeof console)
// dentro tem funcoes
console.log(typeof console.log)

const obj1 = {}
obj1.nome = 'Bola'
// obj1['nome'] = 'Bola' mesma coisa
obj1.caracteristicas = {
    descricao: 'Bola de volei',
    cor: 'Branca'
}

// o ponto é o separador
console.log(obj1.nome)
console.log(obj1.caracteristicas.descricao)
console.log(obj1.caracteristicas.cor)


function Movel(nome) {
    this.nome = nome
    this.exibeNome = function() {
        console.log('O nome do movel é: ' + nome)
    }
}

const movel1 = new Movel('Cadeira')
const movel2 = new Movel('Mesa')
console.log(movel1.nome)
console.log(movel2.nome)
movel1.exibeNome()
movel2.exibeNome()