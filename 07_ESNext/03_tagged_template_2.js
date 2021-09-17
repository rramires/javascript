function real(partes, ...parametros){
    
    // percorre e trata os parametros
    parametros.forEach((valor, indice) => {
        // se o parametro for numero, aplica a máscara
        parametros[indice] = isNaN(valor) ? valor : `R$${valor.toFixed(2).replace('.',',')}`
    })

    // intercalando as partes e os parametros
    resultado = []
    partes.forEach((parte, indice) => {
        // insere uma parte e um parametro até terminar
        resultado.push(parte, parametros.shift() || '')
    })
        
    return resultado.join('')
}
// teste
const preco = 29.99
const precoParcelado = 10.00
// chamando a funcao real, passando a template string
const txt = real `Promoção: 1x de ${preco} ou 3x de ${precoParcelado}, aproveite!`
//
console.log(txt)