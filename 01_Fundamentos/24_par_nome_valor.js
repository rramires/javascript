// par nome/valor
const saudacao = 'Ola' // escopo 1

// num bloco de funcao
function exec(){
    const saudacao = 'Fala' // escopo 2 (outro endereco de memoria)
    return saudacao
}

// imprime
console.log(saudacao)
console.log(exec())

// num objeto
const Cliente = {
    nome: 'Ricardo', // escopo dentro do objeto
    idade: 43, 
    endereco: {
        logradouro: 'Rua Bago de Uva', // escopo dentro do segundo objeto
        numero: 123
    }
}

// imprime
console.log(Cliente)
