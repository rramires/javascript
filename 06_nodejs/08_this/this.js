// nao
console.log(this === global)
console.log(this === module)

// sim
console.log(this === module.exports)
console.log(this === exports)

// cuidado
function testeThis(){
    console.log('Dentro da funcão padrão')
    // não
    console.log(this === module.exports)
    console.log(this === exports)
    // cuidado 
    // this aqui é o escopo global
    console.log(this === global)
    // isso é complicado
    this.perigo = 'Vc está criando variaveis no escopo global'
}
testeThis()

/**
 * USE Arrow Function !!! 
 * é melhor na maioria dos casos e resolve
 * essa caca que era o this antes da ES2015
 */ 
const arrowThis = () => {
    console.log('Dentro da funcão arrow')
    // sim
    console.log(this === module.exports)
    console.log(this === exports)
    // legal 
    // this aqui NAO é o escopo global
    console.log(this === global)
    // pode ficar tranquilo
    this.naoTemPerigo = 'Vc está criando variaveis no escopo da funcao'
    // testando isso
    console.log(this)
}
arrowThis()