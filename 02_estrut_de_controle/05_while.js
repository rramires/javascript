
// usar quanto tem um numero 
// desconhecido em repeticoes
// while( condicoes ){ }

function geraNumAleatorio(min, max){
    return Math.floor(Math.random() * (max - min) + min)
}

let opcao = 0

// enquanto a opção for verdadeira, repete
while(opcao != -1){
    opcao = geraNumAleatorio(-1, 10)
    console.log(opcao)
}
