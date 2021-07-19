const pai = {nome: 'João', corCabelo: 'preto'}

// Object.create(prototipo/pai, outros atributos)
const filha1 = Object.create(pai)
filha1.nome = 'Ana'
// verificando a heranca
console.log(filha1.corCabelo) // preto
// podemos dizer que
console.log(filha1.__proto__ === pai) // true


const filha2 = Object.create(pai, {
    nome: {value: 'Bia', writable: false, enumerable:true} // sobrescrevendo nome, mudando o writable para false
})

console.log(filha2.nome, filha2.corCabelo)

// testando o writable: false
filha2.nome = 'Enza Valentina'
console.log(filha2.nome, filha2.corCabelo) // nao consegue alterar

// listando as propriedades
// note que só lista do 1º nivel
console.log(Object.keys(filha1))
console.log(Object.keys(filha2))

// tem que fazer um loop para acessar mais níveis
for(let key in filha1){
    console.log(`Propriedade: ${key} - valor: ${filha1[key]}`)
}

// testando se as propriedades são do objeto ou vieram por heranca
for(let key in filha2){
    // filha2 tem essa propriedade?
    if(filha2.hasOwnProperty(key)){
        console.log(`Do Objeto filho - Propriedade: ${key} - valor: ${filha2[key]}`) // propriedades do obj filho
    }else{
        console.log(`Por heranca, do pai - Propriedade: ${key} - valor: ${filha2[key]}`) // propriedades do obj pai
    }
}




