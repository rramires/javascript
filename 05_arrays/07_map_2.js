const carrinho = [
    '{"nome": "Borracha", "preco": 3.45}',
    '{"nome": "Lápis", "preco": 1.05}',
    '{"nome": "Caneta Bic", "preco": 2.50}',
    '{"nome": "Caderno 100fl", "preco": 17.33}',
    '{"nome": "Apontador", "preco": 4.02}'
]

let resultado 

// 1º desafio: Só os preços
const soPrecos = e => JSON.parse(e).preco
resultado = carrinho.map(soPrecos)
console.log(resultado) // array


// 2º desafio, string com os precos e simbolo da moeda
const descricao = (e, i) => {
    let obj = JSON.parse(e)
    return `${i + 1} - ${obj.nome} - R$ ${parseFloat(obj.preco).toFixed(2).replace('.',',')}`
}
resultado = carrinho.map(descricao)
console.log(resultado) // array
console.log(resultado.join('\n')) // quebando linha no console com \n










