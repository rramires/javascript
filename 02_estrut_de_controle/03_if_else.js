function imprimeResultado(nota){
    if(nota <= 3){
        console.log('Péssimo!')
    } else if(nota <= 5){
        console.log('Ruim!')
    } else if(nota <= 7){
        console.log('Bom!')
    } else {
        console.log('Excelente')
    }
}

imprimeResultado(3)
imprimeResultado(5)
imprimeResultado(6)
imprimeResultado(9)
imprimeResultado('Opa!!!') // Cuidado! - Trate os dados
