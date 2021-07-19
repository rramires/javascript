const ferrari = {
    modelo: 'F40',
    velMax: 324
}
const volvo = new Object()
volvo.modelo = 'V40'
volvo.velMax = 200

// __proto__ acessa/expõe o prototype interno do Object, topo da hierarquia
console.log(ferrari.__proto__) // {}
// undefined, pois não veio de um 'pai' e sim do Object
console.log(ferrari.prototype) // undefined 
// true
console.log(ferrari.__proto__ === Object.prototype) // true
console.log(volvo.__proto__ === Object.prototype) // true

// retorna null, pois chegamos ao topo da hierarquia
console.log(Object.prototype.__proto__) // null

// [[Prototype]] = conceito != do Object.prototype, já que Object é uma funcao
// toda funcao tem prototype

// reforcando
function MeuObjeto(){
}
// note que o Object é uma funcao
console.log(typeof Object, typeof MeuObjeto)

// retorna o prototipo(pai)
console.log(typeof Object.prototype, MeuObjeto.prototype)





