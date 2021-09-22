/**
 * Gera valor dentro de uma faixa
 * acrescentamos o tempo e um timer, 
 * para simular chamadas assincronas
 */ 
const geraFaixaNumerica = (min, max, tempo) => {
    // se o minimo for maior que o máximo inverte
    if(min > max){
        [max, min] = [min, max]
    }
    // Promise com o sorteio
    return new Promise(resolve => {
        // delay
        setTimeout(() => {
            // gera o valor aleatorio
            const aleatorio = parseInt(Math.random() * (max - min +1)) + min
            // retorna
            resolve(aleatorio)
        }, tempo * 1000);
    })  
}
// Executa - faixa numérica, espera em segundos. 
// geraFaixaNumerica(1, 60, 2).then(console.log)

/**
 * Para fazer várias chamadas e ter o resultado somente qdo 
 * todas retornarem, use o Promise.all([])
 */ 
 function geraMegaSena(){
     return Promise.all([
        geraFaixaNumerica(1, 60, 1),
        geraFaixaNumerica(1, 60, 4),
        geraFaixaNumerica(1, 60, 5),
        geraFaixaNumerica(1, 60, 2),
        geraFaixaNumerica(1, 60, 6),
        geraFaixaNumerica(1, 60, 3)
     ])
 }

/**
 * para testar o tempo de espera use: 
 * console.time('label') - inicia
 * console.timeLog('label') - imprime parcial, qts quiser em trechos diferentes
 * console.timeEnd('label') imprime total
 */ 
console.time('TempoExec') // inicia o contador

// volta um array com todos os valores retornados
// geraMegaSena().then(numeros => { faz algo com o resultado }) ou
geraMegaSena().then(console.log)
              .then(() =>{
                // imprime o tempo total de execução
                console.timeEnd('TempoExec')
              })

