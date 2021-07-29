const aprovados = ['Fulano', 'Sicrano', 'Beltrano', 'João', 'Maria', 'José']

//array.forEach(funcao(valor, indice, proprio_array){}) 

// com function
aprovados.forEach(function(nome, indice){
    console.log(`Índice: ${indice} - Nome: ${nome}`)
})

// com arrow function, em uma linha
aprovados.forEach(nome => console.log(`Nome: ${nome}`))

// com arrow function completa
aprovados.forEach((n,i) => {
    console.log(`Índice: ${i} - Nome: ${n}`)
    }
)

// funcao
const imprime1 = aprovado => console.log(aprovado)
// ou
const imprime2 = function(ap, idx, arr){
    console.log(ap, idx)
    console.log(arr[idx])
}

// passa a funcao
aprovados.forEach(imprime1)
aprovados.forEach(imprime2)
