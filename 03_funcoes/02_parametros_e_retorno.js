// parametros e retorno são opcionais

function area(largura, altura){
    let area = largura * altura

    if(area > 20){
        console.log(`Valor acima do permitido: ${area}m2`)
    }else{
        return area
    }   
}

console.log(area(2,2)) // retorna a area 4
console.log(area(5,5)) // retorna o aviso
console.log(area()) // é possivel chamar com nehum parametro
console.log(area(2)) // é possivel chamar com menos parametros
console.log(area(2,2,3, 10, 6)) // é possivel chamar com mais parametros, que sao ignorados



