/**
 * Tagged Template - processa uma template string dentro de uma funcao
 * 
 * @param {*} partes  - array com as partes, que são o texto
 * @param  {...any} parametros - array com os parametros
 * @returns String
 */

function tag(partes, ...parametros){
    console.log(partes) // [ '', ' esta ', '' ] - array com as partes
    console.log(parametros) // [ 'Ricardo', 'aprovado' ] array com os parametros
    // fazer o processamento e
    // retornar
    return 'String final que será retornada'
}

const aluno = 'Ricardo'
const situacao = 'aprovado'

//console.log(tag(`${aluno} esta ${situacao}`))
console.log(tag `${aluno} esta ${situacao}` ) // ó possível chamar sem os parenteses




