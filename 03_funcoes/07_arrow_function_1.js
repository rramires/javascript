// funcao tradicional
const dobro1 = function(a){
    return 2 * a
}
console.log(dobro1(2))


// transformando em arrow function
const dobro2 = (a) => {
    return 2 * a
}
console.log(dobro2(3))

// se tiver apenas 1 parametro, não necessita dos parenteses
// se tiver apenas 1 linha no corpo não necessita das chaves
const dobro3 = a => 2 * a // em uma linha, sempre retorna
console.log(dobro3(4))


// funcao tradicional sem parametro
function digaOla1(){
    return 'Olá 1'
}
console.log(digaOla1())


// arrow, basta deixar os parenteses vazios
digaOla2 = () => 'Olá 2'
console.log(digaOla2())

// tem gente que costuma fazer assim, mas 
// o _ (underline) é um parametro inútil
digaOla3 = _ => 'Olá 3'
console.log(digaOla3())

// Maluquice! - criar uma funcão arrow anônima e executar
// () => 'Olá 4' funcao, dentro de (   )() executa
console.log( ( () => 'Olá 4' )() )

