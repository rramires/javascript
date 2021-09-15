/**
 * Para criar multiplas instâncias, usar uma Factory
 */
module.exports = () => {
    return {
        valor: 0,
        incr(){
            this.valor ++
        }
    }
}