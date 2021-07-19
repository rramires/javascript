// modelo 'pai'
function Aula(nome, id){
    this.nome = nome
    this.id = id
}
// instancias
const aula1 = new Aula('Introdução 1...', 123)
const aula2 = new Aula('Fim 1...', 456)
// verificando
console.log(aula1, aula2)

/*
Simulando o que acontece qdo usamos o operador 'new'
para entender melhor a criacao de instância
*/
function novo(funcao, ...params){
    // 1 - cria um novo objeto que tem Object como referencia no __proto__
    const obj = {} 
    // 2 - muda referencia do 'pai' para a funcao(modelo pai passado), ver heranca_4.js nessa pasta
    obj.__proto__ = funcao.prototype
    // 3 - 'injetando' o array com os parametros com o apply, ver call_e_apply.js na pasta funcoes
    funcao.apply(obj, params)
    // 4 - retornando
    return obj
}
// testando
const aula3 = novo(Aula, 'Introdução 2...', 123)
const aula4 = novo(Aula, 'Fim 2...', 456)
console.log(aula3, aula4)





