const valores = ['oi', true, 8.9, 3]
console.log(valores, 'Terceiro elemento = ' + valores[2]) // indice começa em zero
console.log('Item inexistente: ' + valores[4]) // elemento que nao existe = undefined

// é um object
console.log('Array é do tipo: ' + typeof valores)

// adicionando itens, pode ser passando o indice
valores[4] = 666
console.log(valores[4]) 
// adiciona por ultimo
valores.push('ultimo') // note que aceita qquer tipo de dados
// adiciona por primeiro
valores.unshift('primeiro')

console.log(valores)

// atualizando trocando itens
valores[2] = 555
console.log(valores[2]) 

// comprimento/tamanho do array
console.log('O array tem: ' + valores.length + ' elementos')

// removendo itens do final
console.log(valores.pop()) // remove e retorna o ultimo item
console.log(valores)
// comprimento/tamanho do array
console.log('O array tem: ' + valores.length + ' elementos')

// removendo itens do inicio
console.log(valores.shift()) // remove e retorna o primeiro item
console.log(valores)
// comprimento/tamanho do array
console.log('O array tem: ' + valores.length + ' elementos')

// removendo itens de uma posicao especifica, splice(posicao, quantidade)
console.log(valores.splice(2, 1)) // remove e retorna um array com segundo item
console.log(valores)
// comprimento/tamanho do array
console.log('O array tem: ' + valores.length + ' elementos')