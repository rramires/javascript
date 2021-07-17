// Contexto léxico é o contexto onde as coisas foram declaradas

/*
Contexto global
*/
const valor = 'Global'

function minhaFuncao(){
    console.log('minhaFuncao: ' + valor)
}

function exec(){
    /*
    Contexto local
    */
    // define aqui o escopo
    const valor = 'Local'

    // entao chamando não vai alterar o valor criado na 1º linha
    minhaFuncao()

    // primeiro procura dentro do escopo local
    // se nao tivesse achado, iria procurar e pegar o 'de fora'
    console.log('exec: ' + valor)
}
// testando
exec()

