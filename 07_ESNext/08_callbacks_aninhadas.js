/**
 * Exemplo sem promises
 * callback's aninhadas para pegar 3 resultados em sequencia
 */

const https = require('https')

const getTurma = (letra, callback) => {
    // montando a url - turmaA.json, turmaB.json, etc
    const url = `https://flexbr.com/files/turma${letra}.json` 
    // os arquivos também estão na pasta dados

    var resultado = ''
    // chamada
    https.get(url, res =>{
        
        // conforme for chegando os dados (vem em partes)
        res.on('data', dados => {
            // contcatena 
            resultado += dados
        })

        // qdo terminar de receber
        res.on('end', () =>{
            // chama o callback, passando o JSON
            callback(JSON.parse(resultado))
        })
    })
}


/**
 * Callback's aninhadas - xaxixo apenas para entender o próximo exemplo!
*/
let nomes = []
//
// 1º chamada
getTurma('A', alunos => {
    // concatena
    nomes = nomes.concat(alunos.map(a => `TurmaA: ${a.nome}`))
    
    // 2º chamada, aninhada...
    getTurma('B', alunos => {
        // concatena
        nomes = nomes.concat(alunos.map(a => `TurmaB: ${a.nome}`))
       
        // 3º chamada, aninhada.
        getTurma('C', alunos => {
            // concatena
            nomes = nomes.concat(alunos.map(a => `TurmaC: ${a.nome}`))

            // imprimindo
            console.log(nomes)
        })
    })
})

/*
Vamos refatorar para algo decente em callbacks_promise.js
*/




