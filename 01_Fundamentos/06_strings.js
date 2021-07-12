const escola = "Cod3r"

// retorna o caracter pelo indice, comeca com 0, no ex: 4 = r
console.log(escola.charAt(4))

// retorna o codigo da tabela unicode, no ex: 3 = 51
console.log(escola.charCodeAt(3))

// retorna a posicao se achar o caracter, no ex: d = posicao 2
console.log(escola.indexOf("d"))
// se nao achar retorna -1, ex: X = -1
console.log(escola.indexOf("X"))

// pega uma faixa de caracteres, ex a partir do indice 1, até o fim
console.log(escola.substring(1))
// do indice 1, até o 2 (corta antes do segundo indice)
console.log(escola.substring(1, 3))

// concatena
console.log('Escola: '.concat(escola).concat('!'))
// ou usando mais (+)
console.log('Escola: ' + escola + '!')

// localiza e substitui
console.log(escola.replace(3, 'E'))
// aceita regex, ex: procura o numero
console.log(escola.replace(/\d/, 'E'))
// procura, letras de a-z independente do case
console.log(escola.replace(/[A-z]/g, 'E'))

// gera um array, ex: virgula como separador
console.log('Fulano,Sicrano,Beltrano'.split(','))

// concatena a partir de um array, ex: colocou o - entre os elementos
console.log(['Fulano', 'Sicrano', 'Beltrano'].join(' - '))

// brincadeira de substituicao usando 2 metodos 
// ex converte num array usando o separador virgula, e depois em string adicionando pipe
console.log('Fulano,Sicrano,Beltrano'.split(',').join(' | '))
















