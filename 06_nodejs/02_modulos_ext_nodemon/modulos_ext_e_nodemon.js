/**
 * 1 - Foi instalado um módulo/biblioteca de terceiros "lodash", via terminal
 * npm i lodash
 * 2 - Foi criada a pasta node_modules e dentro baixado o módulo
 * 3 - De uma olhada no lista de dependências no arquivo criado "package.json"
 * "dependencies": {
    "lodash": "^4.17.21"
  }
  4 - Caso baixe novamente para instalar as dependências, use
  npm i
 */

/**
 * 5 - Para usar importe o modulo
 */
const _ = require('lodash')

/**
 * Já está pronto, por exemplo
 */
setInterval(() => console.log(_.random(900, 1000)), 1000);

/**
 * 6 - Instale o "nodemon" como global (tem que ser como root)
 * sudo npm i -g nodemon
 * ***(caso de erro "sudo: npm: command not found", reinstalar o npm: sudo apt install npm )
 */

/**
 * Agora vc pode usar via terminal o nodemon, ex:
 * nodemon 02_usando_modulos.js
 * 
 * Altere o parametro (1, 1000) do random para (900, 1000), por exemplo e salve
 * Quando salva o nodemon executa novamente a nova versão
 */



