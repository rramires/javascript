// o que é armazenado em prod é a referencia ao objeto
const prod = {nome: 'Celular X'}
console.log(prod.nome)

// passa a refencia
const outro = prod

// muda no objeto
outro.nome = 'Notebook'
// observe que mudou no objeto referenciado
console.log(prod.nome)

// *** Importante 
// nao se aplica aos primitivos
const n1 = 3
console.log(n1)

// no caso do primitivo recebe o valor e nao a referencia
n2 = n1

// mudando o v
n2 = 5

console.log(n1) // 3
console.log(n2) // 5

// null e undefined

// undefined = declarado, mas ainda indefinido
let categoria
console.log(categoria)

// atribuindo um objeto
categoria = {nome: 'Impressoras', desconto: 10}
console.log(categoria)
console.log(categoria.nome)

//console.log(qquer_coisa_nao_declarada) // vai dar erro

// nulo = remove a referencia de um objeto
categoria = null
console.log(categoria)

// vai dar erro, pois a referencia ao objeto foi perdida
//console.log(categoria.nome)

// atribuindo novamente para os outros testes
categoria = {nome: 'Impressoras', desconto: 10}

// nao usar undefined, deixe ele apenas para a linguagem
//categoria.nome = undefined // evite usar
//categoria.desconto = undefined // evite usar

// o correto seria usar um valor que voce convencionou
categoria.nome = ""
categoria.desconto = 0

// aceitavel, mas é mais uma coisa pra ficar testando
categoria.desconto = null;
// ex, poderia fazer apenas 1 teste (desconto > 0):
if(categoria.desconto !== null && categoria.desconto > 0) {
    console.log("Com desconto de: " + categoria.desconto)
}else{
    console.log("Sem desconto!")
}







