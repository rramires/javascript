// criando
const prod1 = {}
// adicionando propriedades
prod1.nome = 'Celular X'
prod1.preco = 1088.99
// totalmente desaconselhavel usar espaco, mas aceita
prod1['Descricao Legal'] = 'Esse celular é mto bom'
// assim OK é mesma coisa que  prod1.desconto_max = 10
prod1['desconto_max'] = 10 // ex 10% 

console.log(prod1)
// acessando uma propriedade
console.log(prod1.nome)

// pode ser feito dessa maneira tambem
// pode ter qquer outro tipo dentro 
// como arrays e ate outros objetos
const prod2 = {
    nome: 'Camisa Polo',
    preco: 79.99,    
    detalhes : {
        cores: ['Azul', 'Laranja', 'Vermelho'],
        tamanhos: ['P', 'M ', 'G'] 
    }
}
// pode adicionar mais propriedades das 2 maneiras
prod2.setor = 'Masculino'
prod2['quantidade'] = 9

console.log(prod2)
console.log(prod2.nome)
// pode acessar usando chaves tb
console.log(prod2['preco'])
console.log(prod2.detalhes.tamanhos[2])
console.log(prod2.detalhes.cores[1])

// curiosidade JSON é parecido, mas não é um objeto do JS (pode ser convertido) 
// String, separada por '' (aspas simples) e tem que ter "" (aspas duplas) nas propriedades
// teste os 2 em: https://jsonlint.com/
//{nome: "Camisa", preco: "10.59"}
/*
Error: Parse error on line 1:
{	nome: "Camisa",	pre
--^
Expecting 'STRING', '}', got 'undefined'
*/

//{"nome" : "Camisa", "preco" : "10.59"}
// Valid JSON





