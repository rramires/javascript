/**
 * Promise - é uma promessa 
 * pode ser cumprida, ou rejeitada
 */
 
// Ex: Exibir uma ntotificação depois de um tempo.
function falarDepoisDe(segundos, frase){

    // resolve = qdo da certo, reject qdo da cagada
    return new Promise((resolve, reject) => {

        // validacao
        if(frase != ''){
            // simulando algo assincrono
            setTimeout(() => {
                resolve(frase) 
            }, segundos * 1000);
        }else{
            // simulando algo assincrono
            setTimeout(() => {
                reject('Erro! Não foi passado a frase.') 
            }, segundos * 1000)
        }
    })
}

// executando de forma simples
falarDepoisDe(1, 'Olá...')
        .then(frase => console.log(frase)) // executa, pegando o resolve
       .catch(e => console.log(e)); // chama caso dê o reject

// testando com tudo Ok
falarDepoisDe(3, 'Que legal') 
        .then(frase => frase.concat('!!!')) // da para ir aninhando com o .then()
        .then(frase => console.log(frase)) // qtas precisar
        .catch(e => console.log(e)) // e tratar os erros com o .catch()

// testando catch depois de 6 segundos
falarDepoisDe(6, '') 
        .then(frase => frase.concat('!!!')) // da para ir aninhando com o .then()
        .then(frase => console.log(frase)) // qtas precisar
        .catch(e => console.log(e)) // e tratar os erros com o .catch()
