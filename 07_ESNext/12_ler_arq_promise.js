// imports
const fs = require('fs')
const path = require('path')

const caminho = path.join(__dirname, 'dados', 'texto.txt')
//console.log(caminho)

const lerArquivo = (caminho) => {
    // retorna a promise
    return new Promise(resolve =>{
        // lê arquivo
        fs.readFile(caminho, (_, conteudo) => {
            // retorna
            resolve(conteudo.toString())
        }) 
    })
}

// 1 - ler o conteúdo
lerArquivo(caminho)
     .then(conteudo => console.log(conteudo))

// 2 - criar um array com as linhas
lerArquivo(caminho)
     .then(conteudo => conteudo.split('\n')) // transforma em array
     .then(linhas => console.log(`Peguei a: ${linhas[1]}`)) // pega a segunda linha