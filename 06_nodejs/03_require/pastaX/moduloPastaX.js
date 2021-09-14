/**
 * Para importar basta passar o caminho relativo
 */
const moduloA = require('../../01_modulos/moduloA')
console.log(moduloA.ola)

/**
 * Modulos nativos do node basta o nome, ex o mólulo http
 */
const http = require('http')
http.createServer((req, res) => {
    res.write('Bom dia !!!')
    res.end()
}).listen(8080)
// 'Bom dia !!!' NÃO aparece nada no console!!!
// Vá em: http://localhost:8080