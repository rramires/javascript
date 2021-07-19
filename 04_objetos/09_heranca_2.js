// Cadeia de prototipos (prototype chain)

// adicionando uma propriedade no Object 
// para fazer testes de hierarquia
Object.prototype.atrib0 = 'Zero' // somente para testes, não recomendável

// avo o protótipo __proto__ é o Object
const avo = { atrib1: 'A'}
const pai = {__proto__: avo, atrib2: 'B'}
const filho = {__proto__: pai, atrib3: 'C'}

// sobe a hierarquia, procura no filho, não tem, 
// procura no pai, não tem procura no avo
console.log(filho.atrib1, filho.atrib2, filho.atrib3)

// provando que acima do avo, está o Object
console.log(filho.atrib0) // acha 'Zero'

// se nao achar, subindo todos os niveis, retorna undefined
console.log(filho.atrib99) // undefined


// -------------------------------------------


// outro exemplo, criando o pai
const carro = {
    velAtual: 0,
    velMax: 200,
    aceleraMais(delta){
        if(this.velAtual + delta > this.velMax){
            this.velAtual = this.velMax
        }else{
            this.velAtual += delta
        }
    },
    status(){
        return `${this.velAtual}Km/h de ${this.velMax}Km/h`
    }
}

// filho 1 (ainda nao tem o 'pai' definido)
const ferrari = {
    modelo: 'F40',
    velMax: 324 // shadowing = sobrescrevendo propriedade
}

// filho 2 (ainda nao tem o 'pai' definido)
// Atenção para a sobrescrita do metodo status
// e para o "super", que sobe um nível 
const volvo = {
    modelo: 'V40',
    // sobrescrevendo o metodo
    status(){ 
        // super, sobe 1 nivel... acessa status do 'pai'
        return `${this.modelo}: ${super.status()}` 
    }
}

// outra maneira de definir o prototipo(quem é o pai):
// Object.setPrototypeOf(destino, prototipo)
// é equivalente a
//ferrari.__proto__ = carro
//volvo.__proto__ = carr
Object.setPrototypeOf(ferrari, carro)
Object.setPrototypeOf(volvo, carro)

// Obs: imprime somente as propriedades do filho
// pois o '.toString()' retorna só o 1º nível
console.log(ferrari, volvo)

volvo.aceleraMais(100)
console.log(volvo.status())

ferrari.aceleraMais(400)
console.log(ferrari.status()) 



