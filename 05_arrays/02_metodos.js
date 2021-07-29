const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']
console.log(pilotos)

// variavel auxiliar
let aux

// pop() - remove e retorna o ultimo elemento
item = pilotos.pop()
console.log(pilotos, 'Saiu: ' + item)

// push() - adiciona no final e retorna o novo comprimento/tamanho
aux = pilotos.push('Verstappen')
console.log(pilotos, 'Comprimento: ' + aux)


// shift() - remove e retorna o ultimo elemento
item = pilotos.shift() 
console.log(pilotos, 'Saiu: ' + item)

// unshift() - adiciona no inicio e retorna o novo comprimento/tamanho
aux = pilotos.unshift('Hamilton')
console.log(pilotos, 'Comprimento: ' + aux)


// splice() pode adicionar ou remover, ou ambos

// adicionando em posicao especifica
// 2 = indice, qtd 0 não remove elemento 
aux = pilotos.splice(2, 0, 'Massa', 'Bottas')
console.log('Arr Origem:', pilotos, '- Arr Retornado:', aux) // retorna [] array vazio. Caso removesse, traria esses elementos

// removendo em posicao especifica
// 3 = indice(Bottas), qdt 2, remove Bottas e Raikkonen
aux = pilotos.splice(3, 2)
console.log('Arr Origem:', pilotos, '- Arr Retornado:', aux) // retorna ['Bottas', 'Raikkonen'], que foram removidos

// removendo e adicionando em posicao especifica
// 2 = indice(Massa), qdt 1, remove Massa e adiciona Bottas no lugar
aux = pilotos.splice(2, 1, 'Bottas')
console.log('Arr Origem:', pilotos, '- Arr Retornado:', aux) // retorna ['Massa'], que foi removido


// slice() - remove uma 'fatia' e retorna
// 2 = indice inicio, 3 = indice final
aux = pilotos.slice(2, 3) // caso o 2º parametro não seja passado, remove até o final 
console.log('Arr Origem:', pilotos, '- Arr Retornado:', aux) // Remove o Bottas



