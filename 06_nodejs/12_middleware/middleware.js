/**
 * middleware pattern (chain of responsability - cadeia de responsabilidades)
 * 
 * Implementação simples para entender o Express onde se tem a requisição, a resposta e o next
 * Nesse caso vamos fazer mais simples só com o context e o next 
 */

// passo 1
const step1 = (context, next) => {
    context.value1 = 'Mid 1'
    next()
}

// passo 2
const step2 = (context, next) => {
    context.value2 = 'Mid 2'
    next()
}

// passo 3
const step3 = (context, next) => {
    context.value3 = 'Mid 3'
    // não chamar o next na ultimo passo
}

// funcao que encapsula o encadeamento e executa os passos
const exec = (context, ...middlewares) => {
    // funcao para ser chamada recursivamente
    const execStep = index => {
        // se tiver setado, se tiver middwares na lista
        if(middlewares && index < middlewares.length){
            // pega o passo atual
            let currentStep = middlewares[index]
            // chama recursivamente, incrementando o index
            currentStep( context, () => execStep( index + 1 ) )
        }
    }
    // faz a 1ª chamada
    execStep(0)
}

// obj para armazenar o resultado
const result = {}
// executando
exec(result, step1, step2, step3)
// imprimindo
console.log(result)


