// a partir do ES2015

/*
Por 'baixo dos panos' tudo é feito com o prototype
como foi visto nos exemplos ...heranca_1-5
é apenas uma maneira mais amigavel/legível...

Produto final é +- a coisa que foi visto no heranca_2:
const avo = { atrib1: 'A'}
const pai = {__proto__: avo, atrib2: 'B'}
const filho = {__proto__: pai, atrib3: 'C'}
*/

class Avo{
    // construtor
    constructor(sobrenome){
        this.sobrenome = sobrenome
    }
}

class Pai extends Avo{
    // sobrescrevendo o construtor
    constructor(sobrenome, profissao = 'Professor'){
        // super sobe o escopo para a superclass que é quem foi extendido, Avo no caso)
        super(sobrenome)
        this.profissao = profissao
    }
}

class Filho extends Pai{
    // constructor
    constructor(nome){
        // setanto o sobrenome na Pai, que repassa para Avo
        super('Silva')
        this.nome = nome
    }
}

// instanciando
const filho = new Filho('João')
// teste
console.log(filho)