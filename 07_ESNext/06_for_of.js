/**
 * ForOf intera os valores - Bom pra uzar com o a estrutura Map
 * ForIn intera os índices
 */

const marca = 'Ricardo'
// for in - temos que passar o indice para pegar o valor
for(let index in marca){
    console.log(index, marca[index])
}
// for of - pega diretamente o valor
for(let letra of marca){
    console.log(letra)
}


// percorrendo Map
const letras = new Set(['a', 'b', 'c'])
for(let letra of letras){
    console.log(letra)
}


// map mais complexo
const assuntosMap = new Map([
    ['Map', {abordado: true}],
    ['Set', {abordado: true}],
    ['Promise', {abordado: false}]
])

for(let assuto of assuntosMap){
    console.log(assuto) // estrutura inteira - [ 'Map', { abordado: true } ] [ 'Set', { abordado: true } ] [ 'Promise', { abordado: false } ]
}

for(let chave of assuntosMap.keys()){
    console.log(chave) // somente as chaves - Map Set Promise
}

for(let valor of assuntosMap.values()){
    console.log(valor) // somente valores - { abordado: true } ...
}

// desestruturando
for(let [chave, valor] of assuntosMap.entries()){
    console.log(chave, valor, valor.abordado) // chave, valor e propriedade - Map { abordado: true } true ...
}






