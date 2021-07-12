let isAtivo = false
console.log(isAtivo) // false

isAtivo = true
console.log(isAtivo) // true


/*
Uma maneira de fazer testes booleanos usando 2 Not's
*/
isAtivo = 0 
console.log(!isAtivo) // ! = Not - Inverte a condicao
console.log(!!isAtivo) // 2x Not !! - Inverte novamente

isAtivo = 1 
console.log(isAtivo)
console.log(!isAtivo) // nega/inverte
// !! = usado para forcar booeleano(inverte e desinverte) facilitando os testes
console.log(!!isAtivo) 

// verdadeiros
console.log(!!3) // todos os numeros, MENOS o 0 (zero)
console.log(!!-1) // inclusive negativos
console.log(!!' ') // Qquer string com pelo menos 1 caracter
console.log(!![]) // array
console.log(!!{}) // objeto
console.log(!!Infinity) // Infinity do number
console.log(!!(isAtivo = true)) // atribuicoes que resultem verdadeiro

// falsos
console.log(!!0) // numero 0 (zero)
console.log(!!'') // string vazia
console.log(!!null) // nulo
console.log(!!undefined) // nao definido
console.log(!!(isAtivo = false)) // atribuicoes que resultem falso

// condicional so com booleano
let nome = '';
console.log(nome || 'Não preenchido') // string vazia = false
nome = 'Ricardo'
console.log(nome || 'Não preenchido') // string com pelo menos 1 caracter = true









