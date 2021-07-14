// percorrendo elementos de um array
const notas = [6.7, 7.4, 5.5, 9.3, 8.1, 6.9]

for(let i in notas){
    console.log(`Posicao: ${i} - Nota: ${notas[i]}`)
}

// percorre elementos de um objeto
const pessoa = {nome: 'Ricardo', idade: 45, altura: 1.77, peso: 82}

for(let prop in pessoa){
    console.log(`Propriedades: ${prop} - Nota: ${pessoa[prop]}`)
}
