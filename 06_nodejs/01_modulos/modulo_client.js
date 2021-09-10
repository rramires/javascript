// Módulos client, geralmente acessam outros modulos

const moduloA = require('./moduloA')
console.log(moduloA.ola)
console.log(moduloA.bemVindo)
console.log(moduloA.ateLogo)
console.log(moduloA)

console.log('-------------------------------------')

const moduloB = require('./moduloB')

console.log(moduloB.bomDia)
console.log(moduloB.boaNoite())
console.log(moduloB) // é uma funcao

// nenhuma é visivel pois o module.exports sobrescreve
console.log(moduloB.visivel1) // undefined
console.log(moduloB.naoVisivel) // undefined
console.log(moduloB.naoVisivel2) // undefined
//




