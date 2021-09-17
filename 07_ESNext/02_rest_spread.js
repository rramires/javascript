// operador é o mesmo ...(três pontos) rest(juntar)/spread(espalhar) são só nomes dados ao operador

// rest com objeto
const funcionario = {nome: 'Fulano', salario: 14384.33}
// o rest tb serve para clonar o objeto
const clone = {...funcionario} // junta os atributos no objeto
// const clone = {ativo: true, ...funcionario} // Também poderia colocar mais atributos
console.log(clone)
// provando que é um clone
funcionario.nome = 'Sicrano'
console.log(clone) // o clone continua a mesma coisa, sem mudar o valor do atributo nome
console.log(clone === funcionario) // false - são objetos diferentes!


// spread com array, mesmo princípio
const grupoA = ['João', 'Maria', 'Pedro']
// tb serve para clonar
const grupoClone = [...grupoA]
console.log(grupoClone)
console.log(grupoClone === grupoA) // false - são objetos diferentes
// pode adicionar mais elementos
const grupoFinal = ['José', ...grupoA, 'Josefina'] // espalha os elementos no array
console.log(grupoFinal)

