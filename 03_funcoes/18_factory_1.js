// factory = fabrica - Fábrica de objetos

// processo manual
const prod1 = {
    nome: 'Tomate',
    preco: 0.5
}
const prod2 = {
    nome: 'Melao',
    preco: 4
}

// entao é mais 'inteligente'/consome menos recursos usar factory

// factory simples

function criaProd(n, p){
    return {
        nome: n,
        preco: p
    }
}

console.log(criaProd('Cebola', 1))

let laranja = criaProd('Laranja', 0.3) 
console.log(laranja)

 
