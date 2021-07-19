// relembrando
function MeuObjeto(){
}
// é uma funcao e o prototipo é referenca ao modelo dele mesmo
console.log(MeuObjeto, typeof MeuObjeto, MeuObjeto.prototype) 

// maneiras de criar a partir de functions
const obj1 = new MeuObjeto
const obj2 = Object.create(MeuObjeto.prototype)

// sim, vem do mesmo 'modelo'/prototipo 
console.log(obj1.__proto__ === obj2.__proto__)// true

console.log(MeuObjeto.prototype === obj1.__proto__)// true
console.log(MeuObjeto.prototype === obj2.__proto__)// true

/*
Resumindo, qdo vc usa o new ou o Object.create(pegando o prototype da function)
ele usa o protótipo/'modelo' do objeto para criar um 'xerox' dele
*/


// O prototype serve para 'injetar' dinamicamente propriedades e metodos, ex:
// isso funciona porque a herança foi feita de maneira correta, usando prototype
MeuObjeto.prototype.nome = 'Ricardo'
MeuObjeto.prototype.falar = function(){
    console.log(`Olá, eu sou o: ${this.nome}!`)
}

// note que mesmo obj1 e obj2 sendo criados antes, 
// herdam as propriedades dinamicas, adicionadas via prototype
console.log(obj1.nome)
obj2.falar()

// mudando a referencia do prototipo
const obj3 = {} // note que o pai dele é Object
console.log(obj3.__proto__ === Object.prototype) // true

// mas posso mudar
obj3.__proto__ = MeuObjeto.prototype
console.log(obj3.__proto__ === Object.prototype) // false
console.log(obj3.__proto__ === MeuObjeto.prototype) // true
// a partir desse momento, herdamos todas as propriedades e metodos de MeuObjeto
// setando
obj3.nome = 'Objeto Três'
// chamando um metodo
obj3.falar()


/*
Agora fica mais fácil explicar:
QquerObjeto.prototype = o prototype faz referencia ao modelo que sera criado, que é o próprio objeto 
instanciaDeQquerObjeto.__proto__ = local onde armazena quem é o protipo/pai/modelo recebido por heranca

*** ver a imagem heranca_diagrama.jpg para entender
*/

// Para pirar o cabeção... :)
console.log((new MeuObjeto).__proto__ === MeuObjeto.prototype) // sim, uma nova instancia aponta para o 'modelo' pai
console.log(MeuObjeto.__proto__ === Function.prototype) // sim, o Objeto é uma funcao
console.log(Function.prototype.__proto__ === Object.prototype) // sim, o prototipo de uma funcao é o mesmo do Objeto
// ultima pira... // chegamos no topo então não tem nada ai
console.log(Object.prototype.__proto__ === null) // null, não undefined... ele(__proto__) 
// ou seja existe, mas não foi definido pois está no topo da hierarquia







