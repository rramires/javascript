const obj = {a: 1, b: 2, c: 3, soma(){ return a + b + c } }

// convertendo em JSON
console.log(JSON.stringify(obj)) // {"a":1,"b":2,"c":3} Note que a funcao foi excluida

// Existem validadores online, ex: https://jsonlint.com/

// convertendo JSON em objeto
//console.log(JSON.parse('{a: 1, b: 2, c: 3}')) // NÃO da certo!!! O parâmetro tem que ser uma String
//console.log(JSON.parse("{'a': 1, 'b': 2, 'c': 3}")) // NÃO da certo!!! Tem que usar aspas duplas ""
// os nomes dos atributos tem que estar com aspas duplas
// "atributo": valor
console.log(JSON.parse('{"a": 1, "b": 2, "c": 3}'))

// aceita, numeros, string, boolean, outro objeto, array e null
console.log(JSON.parse('{"a": 1, "b": "uma string", "c": true, "d": {"a1":1, "b1": "teste"}, "e": [1,2,"texto"], "f": null}'))


// Curiosidade, para gerar um trecho de código a partir de uma string podemos usar o ev¶aluate
// Cuidado!!! pode abrir brechas perigosas se os dados vierem do usuário.
let res = eval(' obj.a + obj.b + obj.c ')
console.log('Resultado: ' + res)







