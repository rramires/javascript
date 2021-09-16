/**
 * Simples exemplo da criação de servidor http
 */

const http = require('http')

http.createServer((req, res) => {

    res.writeHead(200, {'Content-Type': 'text/plain; charset=utf-8'});
    res.write('Olá, eu sou o servidor http do nodejs!')
    res.end()

}).listen(8080)

/**
 * Executar no prompt
 * node http_server.js
 * E testar no browser: 
 * http://localhost:8080/
 */ 
