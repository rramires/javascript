/**
 * Os módulos do node, são singleton por padrão
 */
module.exports = {
    valor: 0,
    incr(){
        this.valor++
    }
}