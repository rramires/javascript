// ES8: Object.values/Object.entries
const obj = {a: 1, b: 2, c: 3}
console.log(Object.values(obj)) // array com os valores
console.log(Object.entries(obj)) // array arrays, contendo ['chave', valor]
console.log(Object.keys(obj)) // array com as chaves - só por curiosidade nao é ES8

// Melhorias na notacao literal
const nome = 'Ricardo'
const pessoa = {
    nome, // já pega o 'label' se não for especificado *** está vindo de const nome, linha 8
    ola(){ // não necessita 'ola: function() {}'
        return 'Olá, ' + this.nome;
    }
}
console.log(pessoa.ola())

// Classe = mesma coisa que fazer com prototype, mas fica mais 'limpinho'
class Animal{ 
    constructor(tipo){
        this.tipo = tipo
    }
}

class Cachorro extends Animal{
    constructor(tipo, raca){
        super(tipo)
        this.raca = raca
    }
}

class MeuCachorro extends Cachorro{
    constructor(tipo, raca, nome){
        super(tipo, raca)
        this.nome = nome
    }
    descricao(){ // não precisa usar function(){}
        return `Sou do tipo: ${this.tipo}\nRaça: ${this.raca}\nMe chamo: ${this.nome}` 
    }
}

const toto = new MeuCachorro('Mamifero', 'Vira Lata', 'Totó')
//
console.log(toto)
console.log(toto.descricao())









 