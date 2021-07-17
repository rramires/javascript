for(let i = 0; i < 10; i++)
{
    console.log(i)
}

// Da erro! i is not defined
console.log('i: ' + i) 

// quando passa de 10 sai do laco
// mas com o let o escopo e o bloco
// nesse caso o loop entao da erro 
// pois I nao existe nesse escopo

// veja diferenca em usando_var_em_loop_1.js