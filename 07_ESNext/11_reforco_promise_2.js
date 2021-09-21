/**
 * Código tosco para demonstrar o problema - callback hell
 * Executar 3 callbacks na sequencia de 2 em 2 segundos
 * Ex uma chamada ao banco, qdo retorna, faz nova consulta, etc
 */
/*
setTimeout(() => {
    console.log('Executado callback 1')
    setTimeout(() => {
        console.log('Executado callback 2')
        setTimeout(() => {
            console.log('Executado callback 3')
        }, 2000);
    }, 2000);
}, 2000);
*/

/**
 * Refatorando com Promise
 */
const esperaPor = (tempo = 2) => {
    // retorna a Promise
    return new Promise(resolve =>{
        setTimeout(() => {
            console.log(`Executado callback depois de ${tempo}s`)
            resolve()
        }, tempo * 1000)
    })
}

esperaPor() // 2 segundos default
    .then(esperaPor(3)) // 3 segundos
    .then(esperaPor) // 2 segundos