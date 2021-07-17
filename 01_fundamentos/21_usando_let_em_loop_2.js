const funcs = []

for(let i = 0; i < 10; i++)
{
    funcs.push(function(){
        console.log(i)
    })
}

// Da erro! i is not defined
// console.log('i: ' + i) 

// da resultados diferentes pois o escopo
// i declarado com let é o bloco, no caso 
// i do for, é 'clonado' para o outro bloco 
// no caso a funcao criada
// * Pesquisar conceito de Closure function 
funcs[2]()
funcs[8]()

// veja diferenca em usando_var_em_loop_2.js