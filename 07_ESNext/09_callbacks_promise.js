/**
 * Exemplo bem mais elegante, usando promises
 */

const https = require('https')

const getTurma = (letra) => {
    // montando a url - turmaA.json, turmaB.json, etc
    const url = `https://flexbr.com/files/turma${letra}.json` 
    // os arquivos também estão na pasta dados
    
    // retorna uma Promisse
    return new Promise((resolve, reject) => {

        let resultado = ''

        // chamada
        https.get(url, res => {
            // conforme for chegando os dados
            res.on('data', dados => {
                // contcatena 
                resultado += dados
            })

            // qdo terminar de receber
            res.on('end', () => {
                // tratando o parser
                try{
                    // chama o resolve que é equivalente ao callback, passando o JSON
                    resolve(JSON.parse(resultado))
                }catch(e){
                    // se der erro chama o callback reject
                    reject(e)
                }
            })
        })
    })
}


/**
 * Callback decente, usando promise
 */

let nomes = []
// encadeando as promises
Promise.all( [getTurma('A'), getTurma('B'), getTurma('C')] ) 
    // quando totas forem resolvidas começa a chamar os then, na sequencia:
    // 1 - recebe um array com os 3 arrays de resultado das 3 chamadas
    // .then(turmas => console.log(turmas)) 
    .then(turmas => [].concat(...turmas)) // então concatenamos os 3 num array só
    //.then(turmas => console.log(turmas))
    // 2 - do resultado, filtramos para pegar só o nome
    .then(alunos => alunos.map(a => a.nome))
    // 3 - imprimimos o resultado
    .then(nomes => console.log(nomes)) 
    // 4 - caso de erro, executa
    .catch(e => console.log(e.message))

// testando reject/erro da promise, com uma turma que não existe
getTurma('X').catch(e => console.log(e.message)) // Erro - Unexpected token < in JSON at position 0