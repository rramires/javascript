/**
 * a importacao pode ser feita dessa maneira
 */
require('./global')

/**
 * Embora de para acessar assim
 */
console.log(global.MinhaApp.nome)

/**
 * Pode ser usada diretamente
 */
 console.log(MinhaApp.saudacao());

 /**
  * É possivel alterar os valores
  * Então para evitar isso use o Object.freeze() ver no global.js
  */
 MinhaApp.nome = "Mudou o nome!"
 console.log(MinhaApp.nome)