/**
 * Gerar números da MegaSena
 */

// faixa numérica
const geraFaixaNumerica = (min, max) => {
    // se o minimo for maior que o máximo inverte
    if(min > max){
        [max, min] = [min, max]
    }
    // Promise com o sorteio
    return new Promise(resolve => {
        const aleatorio = parseInt(Math.random() * (max - min +1)) + min
        resolve(aleatorio)
    })
}
// Executa
geraFaixaNumerica(1, 60)
            .then(console.log)

// Limpa
console.clear()
