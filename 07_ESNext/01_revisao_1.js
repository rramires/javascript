// let e const
{
    var a = 1 // Não use! A desgraçada "vaza" o escopo
    let b = 2
    const c = 3
    console.log(a) // 1
    console.log(b) // 2
    console.log(c) // 3
}
console.log(a) // 1
//console.log(b) // da erro, pois é undefined
//console.log(c) // da erro, pois é undefined


// Template String - aceita expressoes, quebras de linha, etc
let txt = `O vlr de a é: ${a},\n 
somando 10 fica: ${a + 10}`
console.log(txt)


// Dedestructuring
// String
let [t, e, s, ...rest] = 'TESTANDO'
console.log(t, e, s, rest) // volta um array de strings no rest
console.log(`${t}${e}${s}${rest.join('-')}`)

// Array
let [x, , y] = [1, 2, 3]
console.log(x, y)

// Objeto
let {idade: i, nome} = {nome: 'Ricardo', idade: 46}
console.log(i, nome)








