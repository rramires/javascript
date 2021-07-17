
// funcao randomica, usando desestruturacao
function rand({ min = 0, max = 1000 }){
    // min e max, sao pegos da desestruturacao
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

// note que os max e min estao invertidos propositalmente
// para mostrar que ordem nao importa, pois sao 2 propriedades
const obj = {max: 50, min: 40}
// passa o objeto como parametro
console.log(rand(obj))

// pode passar apenas 1 parametro pois foram usados valores padrao
console.log(rand({min: 955}))

// assume os valores padrao
console.log(rand({}))
console.log(rand({naoExiste: 666}))

// da erro, sem passar o objeto
// pois tenta desestruturar
//console.log(rand())





