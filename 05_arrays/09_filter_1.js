const produtos = [
    { nome: 'Notebook', preco: 3999.00, fragil: true, precoFinal: 0},
    { nome: 'iPad Pro', preco: 4999.00, fragil: true, precoFinal: 0},
    { nome: 'Copo Vidro', preco: 8.59, fragil: true, precoFinal: 0},
    { nome: 'Copo Plástico', preco: 6.45, fragil: false, precoFinal: 0},
    { nome: 'Prato Plasico', preco: 12.31, fragil: false, precoFinal: 0}
]
console.log(produtos)
let resultado

// somente os frageis
resultado = produtos.filter(function(e){
    return e.fragil
})
console.log(resultado)

// produtos acima de 50 reais
resultado = produtos.filter(e => e.preco > 500)
console.log(resultado)

// melhorando, dividindo os filtros em funcoes
const barato = e => e.preco < 100
const fragil = e => e.fragil

// aplicando filtros encadeados
resultado = produtos.filter(fragil).filter(barato)
console.log(resultado) // retorna somente o copo de vidro
