// revisando
var numero = 1
{
    // É a mesma variavel de fora
    var numero = 2
    console.log('Dentro: ' + numero)
}
// Pode acabar tendo problema criando outra variavel global com mesmo nome
// ex: muda o valor em outra 'pagina/script' e vc não sabe de onde vem o bug
console.log('Fora: ' + numero)



