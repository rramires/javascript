
// usar quanto tem um numero 
// desconhecido em repeticoes
// while( condicoes ){ }

function geraNumAleatorio(min, max){
    return Math.floor(Math.random() * (max - min) + min)
}

let opcao = -1

// testa e depois verifica se a opção é verdadeira
// se for, repete
do {
    opcao = geraNumAleatorio(-1, 10)
    console.log(opcao)
} while(opcao != -1)
