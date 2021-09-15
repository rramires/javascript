/**
 * Já existe o objeto global e tem algumas coisas
 */
// console.log(global)
/**
 * Podemos adicionar propriedades e acessíveis em qquer outro módulo
 */
/*global.MinhaApp = {
    nome: 'Minha App Lindona',
    saudacao(){
        return 'Olá, sou acessível de qquer lugar'
    }
}
*/

global.MinhaApp = Object.freeze({
    nome: 'Minha App Lindona',
    saudacao(){
        return 'Olá, sou acessível de qquer lugar'
    }
})