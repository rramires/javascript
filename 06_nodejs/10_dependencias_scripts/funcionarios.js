// 19 - pegando a URL
const url = 'https://flexbr.com/funcionarios.json'

// 20 - instanciando o axios (é um client http)
const axios = require('axios')

// pegando os - no caso then vai ser explicado mais além em promisses
// basicamente, retorna somente depois de carregar de uma forma elegante
axios.get(url).then(response => {
    // pega os dados
    const funcionarios = response.data;
    // console.log(funcionarios) // mostra todo o conteudo
    filtraFunc(funcionarios)
});

/**
 * Desafio, pegar a mulher chinesa, com menor salário
 */

/* Olhe o conteúdo do funcionarios.json e pense nesses filtros, ex
id: 443,
nome: 'Shela',
sobrenome: 'Nowell',
email: 'snowellca@upenn.edu',
genero: 'F',
cidade: 'Yufa',
pais: 'China',
empresa: 'Quinu',
salario: 2435.61
*/

// 21 Implementando a resposta

// 2 filters
const chineses = filtro => filtro.pais === 'China'
const mulheres = filtro => filtro.genero === 'M'

// um reduce
const menorSalario = (func, funcAtual) => {
    return func.salario < funcAtual.salario ? func : funcAtual
}

function filtraFunc(funcionarios){
    const funcionarioMaisFerrado = funcionarios.filter(chineses).filter(mulheres).reduce(menorSalario)
    // imprimindo
    console.log(funcionarioMaisFerrado)
}
// chame lá em cima, adicionando dentro do GET 
//filtraFunc(funcionarios)
