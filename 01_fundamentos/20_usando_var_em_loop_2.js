const funcs = []

for(var i = 0; i < 10; i++)
{
    // adiciona funcoes ao array
    funcs.push(function(){
        // imprime o valor de i
        console.log(i)
    })
}

// var vaza o escopo. Fica global! Relembrando: somente dentro de funcão o var delimita o escopo
console.log('i: ' + i) // imprime i: 10

// da o mesmo resultados pois o escopo do 
// i declarado com var é global
funcs[2]() // 10
funcs[8]() // 10

// veja diferenca em usando_let_em_loop_2.js