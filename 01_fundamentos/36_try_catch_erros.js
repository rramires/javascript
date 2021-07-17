/*
Tratamento de erros

try - tentar 
catch - pegar
throw - lançar
finally - finalmente
*/

function tratarErroEncontrado(e){
    // lanca um erro personalizado
    //throw new Error('Minha mensagem de erro personalizada')

    // Somente uma string
    //throw 'Minha mensagem de erro personalizada'

    // um numero
    //throw 0

    // uma flag
    //throw false

    // ou simplesmente executar alguma coisa
    console.log('Deu erro!')

    // se quiser imprimir o erro
    console.log('Detalhes: ' + e)

    /* 
        tambem é possivel, mas não recomendado 
        deixar o catch vazio sem fazer nada
        para mascarar o erro
    */
}

function imprimeCaixaAlta(obj){
    
    // tente executar o que esta dentro do bloco
    try {
        console.log(obj.nome.toUpperCase() + '!')
    } catch(e) { // pega o erro 
        // executa o que estiver nesse blocs
        tratarErroEncontrado(e)
    } finally { // dando erro ou não executa o bloco
        console.log('Terminou de executar a estrutura')
        /*
            Exemplo de utilização:
            Desabilitar o botão que disparou o evento no inicio do 'try' e habilitar no 'finally'
        */
    }
}

// propriedade 'nome' propositalmente diferente para dar erro
let obj = { nm: 'Ricardo' }
imprimeCaixaAlta(obj) // da erro, cai no catch e depois vai pro finnaly

// passando corretamente
obj = { nome: 'Ricardo' }
imprimeCaixaAlta(obj) // nao da erro, pula o catch e vai pro finnaly


