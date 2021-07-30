// o module.exports sobrescreve não adianta criar antes
this.visivel1 = 'Visivel 1'
var naoVisivel = 'Não Visível'
let naoVisivel2 = 'Não Visível2'

// Maneira classica do Node
module.exports = {
    bomDia: 'Bom dia, vindo do módulo B',
    boaNoite(){
        return 'Boa noite vinda do módulo B'
    }
}
// o module.exports sobrescreve não adianta criar depois
this.visivel2 = 'Visivel 2'

