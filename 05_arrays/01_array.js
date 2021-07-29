// é uma funcao, que cria um Objeto especial, indexado.
console.log(typeof Array, typeof [], typeof new Array) // function object object

// Pode ser criado pelo construtor new
let aprovados = new Array('Fulano', 'Sicrano', 'Beltrano')
console.log(aprovados)

// ou pelos [], é mesma coisa
// nesse caso está substituindo no mesmo endereço de memória
aprovados = ['João', 'Carlos', 'Silva']
console.log(aprovados)

// indice de 0 a N...
console.log(aprovados[0]) // João
console.log(aprovados[1]) // Carlos
// retorna undefined, se o elemento não existir
console.log(aprovados[9]) // undefined

// adicionando
aprovados[3] = 'Paulo' 
aprovados.push('Fim') // adiciona no fim
aprovados.unshift('Inicio') // adiciona no inicio
console.log(aprovados) 

// tamanho
console.log(aprovados.length)

// se adicionar pulando
aprovados[8] = 'Finalzao' 
console.log(aprovados.length) // comprimento 10 elementos
// mas os elementos nao definidos ficam com valor undefined
console.log(aprovados) // o VSCode trata a saída dos undefined então <2 empty items>
console.log(aprovados[6],aprovados[7],aprovados[8]) // undefined undefined Finalzao

// classifica
aprovados.sort()
console.log(aprovados)

// apagando
delete aprovados[1] // deixa 'banguela', setando undefined na posicao
console.log(aprovados)

// deixando bonitinho de novo
aprovados = ['João', 'Carlos', 'Silva']

// removendo elementos 
// remove o Sicrano, indice 1, até o 2
// indice de inicio, qtd de excluidos, outros elementos caso queira adicionar
aprovados.splice(1, 2, 'Marcos', 'Maria') //
console.log(aprovados)



