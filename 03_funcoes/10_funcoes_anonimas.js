// funcao 'tradicional'
const soma = function(x, y){
    return x + y
}

// funcao arrow
const subtracao = (x, y) => x - y

// recebe os parametros e outra funcao
const imprimirResuldado = function(a, b, operacao = soma){
    console.log( operacao(a, b) )
}

// soma é a funcao padrao
imprimirResuldado(1, 2) 

// passando uma outra funcao 
imprimirResuldado(4, 2, subtracao)

// passando uma funcao arrow anonima
imprimirResuldado(3, 5, (x, y) => x * y)

// passando uma funcao 'tradicional' anonima
imprimirResuldado(10, 5, function(x, y){ return x / y } )

// caso precise criar em um objeto, use function e nao arrow
const Pessoa = {
    nome: 'Ricardo',
    // funcao anonima
    falar1: function(){
        console.log('Fala 1: ' + this.nome)
    },
    // Ou no ES2015, sem usar function
    falar2(){
        console.log('Fala 2: ' + this.nome)
    },
    // Atenção! Arrow é criada em outro escopo
    // Então this.nome, fica fora do escopo 
    // Não usar!
    falar3: () => console.log('Fala 3: ' + this.nome) 
}

Pessoa.falar1() // OK
Pessoa.falar2() // OK
Pessoa.falar3() // Fala 3: undefined