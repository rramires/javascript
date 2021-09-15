/**
 * como lá no parametros.js tem uma funcao, basta chama-la passando os paramentros
 */ 
const saudacao = require('./parametros')('Fulano', 'Sicrano', 'Beltrano')
// imprimindo o retorno
console.log('Retornado no client: ' + saudacao)