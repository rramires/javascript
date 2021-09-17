/**
 * Exemplo bem mais elegante e legível, usando Promise, Async e Await
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

// Recurso ES8 - para simplificar o código

// 1º criar funcao async
let obterAlunos = async () => {
    const turmaA = await getTurma('A')
    const turmaB = await getTurma('B')
    const turmaC = await getTurma('C')
    // concatena
    return [].concat(turmaA, turmaB, turmaC)
}
// chama a função assincrona
obterAlunos()
       // aplica os próximos passos 
      .then( alunos => alunos.map(a => a.nome) )
      .then( nomes => console.log(nomes) )
      .catch(e => console.log(e.message))

// testando reject/erro da promise, com uma turma que não existe
getTurma('X').catch(e => console.log(e.message)) // Erro - Unexpected token < in JSON at position 0





