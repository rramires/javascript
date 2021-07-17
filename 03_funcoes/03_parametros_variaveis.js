function soma(){
    let total = 0
    for(let i in arguments){
        total += arguments[i]
    }
    return total
}

console.log(soma())
console.log(soma(1))
console.log(soma(1,2))
console.log(soma(1,2,5,9,5.3))
// cuidado, pois com string concatena 
// teria que tratar (typeof === Number, != isNaN por exemplo)
console.log(soma(1,2,5,9,5.3,'Tomate', 'Cenoura', 33))
// Assim que acha uma string concatena
console.log(soma('Tomate', 'Cenoura', 'Abobrinha')) // 0 + 'Tomate' + 'Cenoura'


