// objeto é uma coleção dinâmica de pares chave/valor
const produto = new Object // = produto = {}
// chave =(recebe) valor
produto.nome = 'Cadeira'
// também pode ser dessa maneira - 
// é possivel usar espaços produto['marca do produto'] mas não recomendado de jeito nenhum!!!
produto['marca'] = 'Hermann Miller'
// usado geralmente para passar valor dinânico, ex:
let prop = 'preco'
produto[prop] = 5000
// verificando
console.log(produto)

// excluindo propriedades
delete produto.preco
delete produto.marca // delete produto['marca'] tb é aceito
// verificando
console.log(produto)

const carro = {
    modelo: 'A4',
    valor: 89000,
    // é possivel ter qquer outro tipo de dado, inclusive outros objetos
    proprietario: {
        nome: 'Ricardo',
        idade: 56,
        // outro objeto
        endereco: {
            rua: 'Bago de Uva',
            numero: 666
        }
    },
    // array's
    condutores: [{nome: 'João', idade: 33}, {nome: 'Ana', idade: 22}]
}
// verificando
console.log(carro)

// acessando/alterando via notacao de ponto
carro.proprietario.idade = 43

// acessando o objeto
console.log(carro.proprietario)

// acessando item do array
console.log(carro.condutores[0].nome)
console.log(carro.condutores[1].nome)


// pode deletar também
delete carro.condutores
delete carro.proprietario
// verificando
console.log(carro)
