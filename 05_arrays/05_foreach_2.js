const aprovados = ['Fulano', 'Sicrano', 'Beltrano', 'João', 'Maria', 'José']

// Meu forEach para entender o funcionamento
Array.prototype.meuForEach = function(callback){

    // percorre todos os elementos
    for(let i = 0; i < this.length ; i++){
        // chama a funcao, passando o elemento, indice e o próprio array
        callback(this[i], i, this)
    }
}
// testando -> elemento, indice e o próprio array
aprovados.meuForEach((e, i, a) => {
        console.log(`Índice: ${i} Elemento: ${e} - Pegando do Array: ${a[i]}`)
    }
)
//
console.log('-------------------')
// comparando
aprovados.forEach(  
    (e, i, a) => {
        console.log(`Índice: ${i} Elemento: ${e} - Pegando do Array: ${a[i]}`)
    }
)
