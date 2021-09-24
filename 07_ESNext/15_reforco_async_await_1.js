/**
 * Código base, usando promise
 */
const aguarda = (tempo = 2) => {
    return new Promise((resolve) =>{
        setTimeout(() => resolve(), tempo * 1000);
    })
}

// chamada/uso do then para encadear
/*
aguarda()
  .then(() => console.log('Executou 1'))
  .then(aguarda)
  .then(() => console.log('Executou 2'))
  .then(aguarda)
  .then(() => console.log('Executou 3'))
*/

/**
 * Refatorando, usando async/await
 */
const executar = async () => {
    await aguarda()
    console.log('Executou 1')
    await aguarda()
    console.log('Executou 2')
    await aguarda()
    console.log('Executou 3')
}
executar()