/**
 * crie uma funcao, que irá receber os valores
 * *** poderia ser também propriedades específicas
 */ 
module.exports = function(...nomes){

    // imprimindo os valores recebidos
    console.log('Recebido no módulo parametros: ' + nomes)

    // retornando alguma coisa
    return nomes.map(nome => `Boa semana ${nome}`).join(' - ')
}