/**
 * Instancie o módulo FileSystem
 */
const fs = require('fs')

const produto = {
    nome: 'Celular',
    preco: 1249.99,
    desconto: 0.15
}

fs.writeFile(__dirname + '/arquivo_gerado.json', JSON.stringify(produto), err => {
    console.log(err || 'Arquivo salvo!')
})

console.log(__dirname)