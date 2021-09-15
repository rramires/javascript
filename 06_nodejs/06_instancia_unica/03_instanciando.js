/**
 * Mesmo aparentemente criando duas instâncias, aponta para o mesmo objeto
 */
const moduloSingleton1 = require('./01_singleton')
const moduloSingleton2 = require('./01_singleton')
// dois incrementos no 1
moduloSingleton1.incr()
moduloSingleton1.incr()
// um incremento no 2
moduloSingleton2.incr()
// veja que o resultado do segundo é o mesmo, pois é um singleton
console.log(moduloSingleton1.valor)
console.log(moduloSingleton2.valor)


/**
 * Já criando chamando a Factory via (), cria objetos diferentes
 */
 const moduloFactory1 = require('./02_factory')()
 const moduloFactory2 = require('./02_factory')()
 // dois incrementos no 1
 moduloFactory1.incr()
 moduloFactory1.incr()
 // um incremento no 2
 moduloFactory2.incr()
 // veja que o resultado é o diferente, pois foi criado pela Factory
 console.log(moduloFactory1.valor)
 console.log(moduloFactory2.valor)
