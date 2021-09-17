/**
 * Set - nova estrutura de conjunto
 * Não indexada, e não aceita repetição
 */

// não aceita repeticao, não é indexado
const times = new Set()
times.add('Vasco')
times.add('Atletico').add('Coritiba').add('Flamengo')
// repetindo
times.add('Vasco')

console.log(times) // note que Vasco não repetiu
// pegando tamanho
console.log(times.size)// 4
// verficando
console.log(times.has('vasco')) // false é case sensitive
console.log(times.has('Vasco')) // true
// apagando
times.delete('Flamengo')
console.log(times.size) // 3
console.log(times.has('Flamengo')) // false


const nomes = ['Fulano', 'Sicrano', 'Beltrano', 'Fulano'] // Perceba 2x Fulano
console.log(nomes)// array aceita repeticao
const nomesSet = new Set(nomes) // aceita array como source
console.log(nomesSet) // mas remove os duplicados





