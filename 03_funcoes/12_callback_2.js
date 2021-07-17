// array de notas
const notas = [7.7, 6.5, 5.2, 8.9, 3.6, 7.1, 9.0]

// problema/objetivo: extrair as notas menores que 7 e jogar nesse array
let notasBaixas = []


// sem callback
for(let i in notas){
    // pega a atual
    let notaAtual = notas[i]
    // faz a verificacao
    if(notaAtual < 7)
    {
        // insere no array
        notasBaixas.push(notaAtual)
    }
}
// conferindo
console.log(notasBaixas)

// zerando 
notasBaixas = []


// usando callback com funcao 'tradicional'
notasBaixas = notas.filter(function(notaAtual){
                    return notaAtual < 7
            })

// conferindo
console.log(notasBaixas)


// zerando
notasBaixas = []

// usando callback com arrow function
notasBaixas = notas.filter(notaAtual => notaAtual < 7)

// conferindo
console.log(notasBaixas)



