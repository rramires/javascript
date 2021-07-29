/* Desafio - Fazer de forma declarativa!
2 - Filtrar somente os produtos frágeis
2 - Implementar um filtro no carrinho de compras, para calcular a adição de um cupom de 10% de desconto com o map
3 - Calcular o total usando o reduce
*/

const produtos = [
    { nome: 'Notebook', preco: 3999.00, fragil: true, precoFinal: 0},
    { nome: 'iPad Pro', preco: 4999.00, fragil: true, precoFinal: 0},
    { nome: 'Copo Vidro', preco: 8.59, fragil: true, precoFinal: 0},
    { nome: 'Copo Plástico', preco: 6.45, fragil: false, precoFinal: 0},
    { nome: 'Prato Plasico', preco: 12.31, fragil: false, precoFinal: 0}
]


// 1 - Filter dos frageis
const filtroFrageis = item => item.fragil
// teste
//console.log(produtos.filter(filtroFrageis))

// 2 - Map do Desconto
let cupom = 0.9 // 10% de desconto
// calculo
const aplicaDesconto = (item, index) => {
    item.precoFinal = Number( (item.preco * cupom).toFixed(2) )
    return item
}
// const produtosComDesconto = produtos.map(aplicaDesconto)
// console.log(produtosComDesconto)

// aplicando os metodos em cascata
let filtrados = produtos.filter(filtroFrageis).map(aplicaDesconto)
console.log(filtrados)

// 3 - Reduce do total e com desconto
const calculaTotal = (acumulador, item) => acumulador + item.preco
let total = filtrados.reduce(calculaTotal, 0)
console.log('Total:', total)
// total com desconto
const calculaTotalDesconto = (acumulador, item) => acumulador + item.precoFinal
let totalDesconto = filtrados.reduce(calculaTotalDesconto, 0)
console.log('Total com desconto:', totalDesconto)


