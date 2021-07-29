const produtos = [
    { nome: 'Notebook', preco: 3999.00, fragil: true, precoFinal: 0},
    { nome: 'iPad Pro', preco: 4999.00, fragil: true, precoFinal: 0},
    { nome: 'Copo Vidro', preco: 8.59, fragil: true, precoFinal: 0},
    { nome: 'Copo Plástico', preco: 6.45, fragil: false, precoFinal: 0},
    { nome: 'Prato Plasico', preco: 12.31, fragil: false, precoFinal: 0}
]
console.log(produtos)
let resultado

// desafio: Implementando meuFiltro
Array.prototype.meuFiltro = function(callback){
     // array de retorno
     const newArr = []
     // loop nos elementos
     for(let i = 0 ; i < this.length ; i++){
        // qdo o callback for verdadeiro
        if(callback(this[i], i, this))
        {
            newArr.push(this[i]) // adiciona o elemento
        }   
     }
     return newArr
}

// melhorando, dividindo os filtros em funcoes
const barato = e => e.preco < 100
const fragil = e => e.fragil

// aplicando filtros encadeados
resultado = produtos.meuFiltro(fragil).filter(barato)
console.log(resultado) // retorna somente o copo de vidro



