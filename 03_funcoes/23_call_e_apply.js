function getPreco(imposto = 0, moeda = 'R$'){
    return `${moeda} ${this.preco * (1 - this.desconto) * (1 + imposto)}`
}

const produto = {
    nome: 'Notebook',
    preco: 4899.00,
    desconto: 0.15,
    getPreco // adiciona a funcao criada anteriormente
}

console.log(produto.getPreco());


// note que aqui nao foi definido getPreco
const carro = { 
    preco: 54000,
    desconto: 0.2    
}

// usando via call, passando o objeto de contexto
console.log( getPreco.call(carro) )
// usando via apply, passando o objeto de contexto
console.log( getPreco.apply(carro) )

// nos 2 casos acima, é exatamente igual
// a diferenca esta na passagem de parametros

// usando via call, passando: objeto de contexto, outros paramentros separados por virgula
console.log( getPreco.call(carro, 0.17) )

// usando via apply, passando: objeto de contexto, array com os parametros
console.log( getPreco.apply(carro, [0.17, '$']) )


