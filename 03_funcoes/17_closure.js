// conceito: Closure é o escopo criado qdo uma funcao é declarada
// Esse escopo vai permitir o acesso a variaveis externas

// Vamos ver na prática

// constante texto foi declarado no escopo global
const texto = 'Declarado no escopo Global'

function funcaoDeFora(){

    // outra constante texto foi declarado nesse escopo, dentro da funcao 
    const texto = 'Declarado dentro da funcaoDeFora' // se comentar, vai pegar a de fora

    function funcaoDeDentro(){
        return texto
    }

    // retorna a funcao
    return funcaoDeDentro
}

// pegando a funcao
const subfuncao = funcaoDeFora() 
 
// executando
console.log(subfuncao())

/*
Teste novamente, comentando a linha 12 "const texto..."
Note que não achando a constante texto dentro da funcao, 
procura fora imprimindo "Declarado no escopo Global"

Então se tivessem 10 ou mais funcoes umas dentro das outras, não importa
iria ficar procurando o x, cada vez no escopo de fora, subindo niveis
até achar... se não achar, da erro
*/