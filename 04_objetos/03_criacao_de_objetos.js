// criacao via notação literal
const obj1 = {}
console.log(obj1)

// criacao via operador new (nao deixa de chamar uma funcao construtora)
const obj2 = new Object // ou new Object() com os parenteses, tanto faz
console.log(obj2)

// Object é uma função, cuja instância é um object
console.log(typeof Object, typeof new Object)
/*
Por baixo dos panos como se tivesse uma factory +- assim:
function Objetc(){
    return {}
}
*/


// criacao via funcao construtora
function Produto(nome, preco){
    // propriedades
    this.nome = nome,
    this.preco = preco,
    // metodos
    // use arrow functions para não ter o escopo do this, variando
    this.getDescricao = () => {
        return 'Eu sou o: ' + this.nome + ', e meu preço é: ' + this.preco
    }
}
// criando uma instancia
let prod1 = new Produto('Notebook', 4000)
console.log(prod1)

// chamando um metodo
console.log(prod1.getDescricao())


// criacao via funcao factory
function criarFuncionario(nome, salario)
{
    return {
        nome,
        salario,
        getInfos(){
            return 'Meu nome é: ' + nome + ', eu ganho: ' + salario
        }
    }
}

let func1 = criarFuncionario('Ricardo', 12000)
console.log(func1)

// chamando o metodo
console.log(func1.getInfos())


// criacao via Object.create
const filha = Object.create(null) // será visto com mais detalhes em outro momento
filha.nome = 'Ana'
console.log(filha)


// Ex de uma função 'famosa' que faz parser e retorna um Objeto
const fromJSON = JSON.parse('{"info": "Vim do JSON!!!"}')

console.log(fromJSON)
// pegando a propriedade
console.log(fromJSON.info) 