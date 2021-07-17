// callback - chamar de volta - padrao observer
// uma funcao chamada qdo ocorrer um evento

// array
const fabricantes = ['Mercedes', 'Audi', 'BMW']

// funcao que sera usada como callback
function imprimir(nome, indice){
    console.log(`${indice +1} - ${nome}`)
}

// foreach tem um evento que chama a funcao passada para callback a cada elemento
fabricantes.forEach(imprimir)

// usando arrow function
fabricantes.forEach( (carro, indice) => console.log(`${indice +1} - ${carro}`) )



