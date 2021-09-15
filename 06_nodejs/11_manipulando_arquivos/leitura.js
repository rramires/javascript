/**
 * Instancie o módulo FileSystem
 */
const fs = require('fs')

// para pegar a pasta atual 
console.log('Pasta atual: ' + __dirname)
// caso precise pegar o próprio arquivo
console.log('Arquivo atual: ' + __filename)


// pegando o caminho até o arquivo
const caminho = __dirname + '/arquivo.json'

/*
sincrono - CUIDADO, pois trava o EventLoop e fica esperando carregar
*/
const conteudo = fs.readFileSync(caminho, 'utf-8')
//
console.log(conteudo)


/*
assincrono - chama um evento qdo carregar - NÃO trava o EventLoop
*/
fs.readFile(caminho, 'utf-8', (err, conteudo) => {
    // convertendo de JSON para Object
    const config = JSON.parse(conteudo)
    //
    console.log(`Host: ${config.db.host}, Port: ${config.db.port}, User: ${config.db.user}, Pass: ${config.db.pass}`)
})


// especificamente para JSON, tem uma outra maneira
const config = require('./arquivo.json')
// Perceba no console, que esse resultado veio antes, pois é sincrona a leitura
console.log(`Modo direto: ' ${config.db.host} ${config.db.port}`)


// lendo uma pasta
fs.readdir(__dirname, (err, arquivos) => {
    console.log('Arquivos: ' + arquivos.join(' - '))
})